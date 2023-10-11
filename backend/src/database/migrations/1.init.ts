import { EventModel } from '../../models/event'
import { v4 as uuid } from 'uuid'
import { BaseMigration } from './base'
import { eventRepo } from '../repositories/event'

export class Init extends BaseMigration {
  constructor() {
    super('init')
  }

  async up(): Promise<void> {
    const event1 = new EventModel({
      id: uuid(),
      name: 'BODYPUMP 125 Initial Training Cincinnati, OH',
      startDate: new Date(),
      eventType: 'live',
      program: 'BP',
      address: 'Cincinnati, OH',
    })

    const event2 = new EventModel({
      id: uuid(),
      name: 'LES MILLS TONE 21 Initial Training Prattville, AL',
      startDate: new Date(),
      eventType: 'live',
      program: 'TN',
      address: 'Prattville, AL',
    })

    const event3 = new EventModel({
      id: uuid(),
      name: 'Online BODYPUMP 125 Initial Training',
      startDate: new Date(),
      eventType: 'online',
      program: 'BP',
      address: '',
    })

    await eventRepo.set(event1)
    await eventRepo.set(event2)
    await eventRepo.set(event3)
  }
}
