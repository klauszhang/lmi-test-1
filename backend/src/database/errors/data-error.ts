import { BaseError } from './base-error'

export class DataError extends BaseError {
  constructor(message: string, originalError: Error) {
    super(message, 'DataError', 'Data', originalError)
  }
}
