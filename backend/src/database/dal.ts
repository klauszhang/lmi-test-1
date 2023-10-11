import { Level } from 'level'
import { BaseModel, TData, getKey } from '../models/base'
import { logger } from '../services/logger'
import { Logger } from 'pino'
import { AbstractSublevel, AbstractValueIteratorOptions } from 'abstract-level'
import { toPaginatedData } from '../models/pagination'

export abstract class Dal<TD extends TData, T extends BaseModel<TD>> {
  logger: Logger
  db: AbstractSublevel<
    Level<string, string>,
    string | Buffer | Uint8Array,
    string,
    string
  >
  protected constructor(protected type: string, db: Level) {
    this.logger = logger.child({ dalType: type, service: 'dal' })
    this.db = db.sublevel(type)
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

  async getAll(offset: number, after?: string): Promise<TD[]> {
    this.logger.trace({ offset, after }, `get all data`)

    const scanConfig: AbstractValueIteratorOptions<string, string> = {
      limit: offset,
    }

    if (after) {
      scanConfig.gt = after
    }

    const values = await this.db.values(scanConfig).all()

    return values
      .map((value: string) => this.toModel(value))
      .filter(Boolean) as TD[]
  }

  protected toModel(data: string): TD | null {
    if (!data) return null
    return JSON.parse(data) as TD
  }
}
