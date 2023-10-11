import { v4 as uuid } from 'uuid'
import { BaseMigration } from './base'
import { TicketModel } from '../../models/ticket'
import { ticketRepo } from '../repositories/ticket'

export const earlyBird = new TicketModel({
  id: uuid(),
  description: 'Early bird ticket',
  price: '100',
  type: 'early-bird',
})

export const standard = new TicketModel({
  id: uuid(),
  description: 'Standard ticket',
  price: '200',
  type: 'standard',
})

export const vip = new TicketModel({
  id: uuid(),
  description: 'VIP ticket',
  price: '300',
  type: 'vip',
})

export class CreateTickets extends BaseMigration {
  constructor() {
    super('create tickets')
  }

  async up(): Promise<void> {
    await ticketRepo.set(earlyBird)
    await ticketRepo.set(standard)
    await ticketRepo.set(vip)
  }
}
