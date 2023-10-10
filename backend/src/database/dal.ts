import { Level } from 'level'
import { BaseModel, TData, getKey } from '../models/base'
import { logger } from '../services/logger'
import { Logger } from 'pino'
import { DataError } from './errors/data-error'

export abstract class Dal<TD extends TData, T extends BaseModel<TD>> {
  logger: Logger
  protected constructor(protected type: string, protected db: Level) {
    this.logger = logger.child({ dalType: type, service: 'dal' })
  }

  async get(id: string) {
    try {
      this.logger.trace({ id }, `read data`)
      const stringData = await this.db.get(getKey(this.type, id))
      return this.toModel(stringData)
    } catch (error) {
      const typedError = error as any
      if (typedError.notFound) {
        return null
      }
      this.logger.error({ typedError }, `read data error`)
      throw typedError
    }
  }

  async set(input: T) {
    try {
      this.logger.trace({ input }, `write data`)
      return this.db.put(input.key, input.toString())
    } catch (error) {
      this.logger.error({ error }, `write data error`)
      throw error
    }
  }

  async del(id: string) {
    this.logger.trace({ id }, `delete data`)
    return this.db.del(getKey(this.type, id))
  }

  protected toModel(data: string): T | null {
    if (!data) return null
    return JSON.parse(data) as T
  }

  // TODO add batch and other methods
}
