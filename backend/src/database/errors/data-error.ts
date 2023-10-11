import { DatabaseError } from './base-error'

export class DataError extends DatabaseError {
  constructor(message: string, originalError: Error) {
    super(message, 'DataError', 'Data', originalError)
  }
}
