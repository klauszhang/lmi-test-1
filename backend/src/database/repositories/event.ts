import { Level } from 'level'
import { MigrationData, MigrationModel } from '../../models/migration'
import { client } from '../client'
import { Dal } from '../dal'
import { EventData, EventModel } from '../../models/event'

export class EventRepo extends Dal<EventData, EventModel> {
  constructor(db: Level = client) {
    super('Event', db)
  }
}

export const eventRepo = new EventRepo()
