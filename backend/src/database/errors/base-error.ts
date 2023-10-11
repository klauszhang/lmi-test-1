type ErrorTypes = 'InternalError' | 'DataError'
type Fault = 'Dev' | 'Data' | 'User'

export abstract class DatabaseError extends Error {
  constructor(
    public message: string,
    public type: ErrorTypes,
    public fault: Fault,
    public originalError: Error
  ) {
    super(message)
    this.stack = originalError.stack
  }
}
