import { MigrationModel } from '../../models/migration'
import { logger } from '../../services/logger'
import { MgirationNotInitError } from '../errors/internal-error'
import { migrationRepo } from '../repositories/migration'

export abstract class BaseMigration {
  after: BaseMigration | undefined
  abstract up(): Promise<void>

  migration?: MigrationModel
  step?: number
  logger = logger.child({ migration: this.name, service: 'database-migration' })

  protected constructor(public name: string) {}

  init(after?: BaseMigration) {
    if (!after) {
      this.step = 0
    } else {
      if (!after.step && after.step !== 0) {
        throw new MgirationNotInitError(after)
      }

      this.step = after.step + 1
    }

    this.migration = new MigrationModel({
      step: this.step,
      name: this.name,
      id: `${this.step}`,
    })
  }

  async executeUp() {
    if (!this.migration) throw new MgirationNotInitError(this)

    // check if migration has done
    const migrationExists = await migrationRepo.get(this.migration.id)

    if (migrationExists) {
      // skip migration
      return
    }

    this.logger.info(
      {
        step: this.step,
        migration: this.name,
      },
      `Migration up`
    )

    if (this.after) {
      await this.after.executeUp()
    }

    await this.up()

    await migrationRepo.set(this.migration)
  }
}
