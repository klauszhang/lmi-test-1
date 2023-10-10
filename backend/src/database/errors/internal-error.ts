import { BaseMigration } from '../migrations/base'
import { BaseError } from './base-error'

export class InternalError extends BaseError {
  constructor(public message: string, public originalError: Error) {
    super(message, 'InternalError', 'Dev', originalError)
  }
}

export class MgirationNotInitError extends InternalError {
  migrationName: string
  constructor(
    public migration: BaseMigration,
    public originalError: Error = new Error()
  ) {
    super('Migration not initialized', originalError)

    this.migrationName = migration.name
  }
}
