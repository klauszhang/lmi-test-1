import { logger } from '../../services/logger'
import { BaseMigration } from './base'
import { migrations } from './migrations'

async function executeUp(migrations: BaseMigration[]) {
  let idx = 0
  for await (const migration of migrations) {
    if (idx === 0) {
      migration.init()
    } else {
      migration.init(migrations[idx - 1])
    }

    await migration.executeUp()
    idx++
  }

  logger.info('Migration completed')
}
executeUp(migrations)
