import { Level } from 'level'
import { client } from '../client'
import { BaseRepo } from './base'
import { TicketData, TicketModel } from '../../models/ticket'

export class TicketRepo extends BaseRepo<TicketData, TicketModel> {
  constructor(db: Level = client) {
    super('Ticket', db)
  }
}

export const ticketRepo = new TicketRepo()
