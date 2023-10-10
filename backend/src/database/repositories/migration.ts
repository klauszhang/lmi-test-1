import { Level } from 'level'
import { MigrationData, MigrationModel } from '../../models/migration'
import { client } from '../client'
import { Dal } from '../dal'

export class MigrationRepo extends Dal<MigrationData, MigrationModel> {
  constructor(db: Level = client) {
    super('Migration', db)
  }
}

export const migrationRepo = new MigrationRepo()
