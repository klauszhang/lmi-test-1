import { logger } from '../../services/logger'
import { BaseMigration } from './base'
import { migrations } from './migrations'

async function executeUp(migrations: BaseMigration[]) {
  for await (const migration of migrations) {
    migration.init()
    await migration.executeUp()
  }

  logger.info('Migration completed')
}
executeUp(migrations)
