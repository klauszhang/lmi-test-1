import { BaseModel, TData } from './base'

export type TicketData = TData & {
  price: string
  description: string
  type: 'early-bird' | 'standard' | 'vip'
}

export class TicketModel extends BaseModel<TicketData> {
  constructor(data: TicketData) {
    super('Event', data)
  }
}
