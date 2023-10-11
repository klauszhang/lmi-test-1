import { BaseModel, TData } from './base'

export type EventData = TData & {
  name: string
  startDate: Date
  eventType: 'live' | 'online'
  program: string
  address: string
  ticketIds: string[]
}

export class EventModel extends BaseModel<EventData> {
  constructor(data: EventData) {
    super('Event', data)
  }
}
