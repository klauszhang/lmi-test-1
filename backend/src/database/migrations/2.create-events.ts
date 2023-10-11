import { EventModel } from '../../models/event'
import { v4 as uuid } from 'uuid'
import { BaseMigration } from './base'
import { eventRepo } from '../repositories/event'
import { earlyBird, standard, vip } from './1.create-tickets'

export class CreateEvents extends BaseMigration {
  constructor() {
    super('create events')
  }

  async up(): Promise<void> {
    const event1 = new EventModel({
      id: uuid(),
      name: 'BODYPUMP 125 Initial Training Cincinnati, OH',
      startDate: new Date(),
      eventType: 'live',
      program: 'BP',
      address: 'Cincinnati, OH',
      ticketIds: [earlyBird.id, standard.id],
    })

    const event2 = new EventModel({
      id: uuid(),
      name: 'LES MILLS TONE 21 Initial Training Prattville, AL',
      startDate: new Date(),
      eventType: 'live',
      program: 'TN',
      address: 'Prattville, AL',
      ticketIds: [standard.id, standard.id, vip.id],
    })

    const event3 = new EventModel({
      id: uuid(),
      name: 'Online BODYPUMP 125 Initial Training',
      startDate: new Date(),
      eventType: 'online',
      program: 'BP',
      address: '',
      ticketIds: [standard.id],
    })

    await eventRepo.set(event1)
    await eventRepo.set(event2)
    await eventRepo.set(event3)
  }
}
