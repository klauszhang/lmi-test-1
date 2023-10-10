import { Level } from 'level'
import { client } from '../client'
import { Logger } from 'pino'
import { logger } from '../../services/logger'

export class MetadataRepo {
  logger: Logger

  constructor(protected db: Level = client) {
    this.logger = logger.child({
      service: 'MetadataRepo',
    })
  }

  async getAllKeys() {
    this.logger.trace({}, 'get all keys')
    const data = await this.db.keys().all()
    return data
  }

  async get(key: string) {
    try {
      this.logger.trace({ key }, 'get by key')
      const data = await this.db.get(key)
      return data
    } catch (e) {
      console.log(e)
      return null
    }
  }
}
