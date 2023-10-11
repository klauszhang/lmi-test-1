import { Level } from 'level'
import { client } from '../client'
import { EventData, EventModel } from '../../models/event'
import { BaseRepo } from './base'

export class EventRepo extends BaseRepo<EventData, EventModel> {
  constructor(db: Level = client) {
    super('Event', db)
  }
}

export const eventRepo = new EventRepo()
