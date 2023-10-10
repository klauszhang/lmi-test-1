import { EventModel } from '../../models/event'
import { v4 as uuid } from 'uuid'
import { BaseMigration } from './base'
import { eventRepo } from '../repositories/event'

export class Init extends BaseMigration {
  constructor() {
    super('init')
  }

  async up(): Promise<void> {
    const event = new EventModel({
      id: uuid(),
      name: 'test',
      startDate: new Date(),
      eventType: 'live',
    })

    await eventRepo.set(event)
  }
}
