import { TData } from './base'

export type Ticket = TData & {
  price: string
  description: string
  type: 'early-bird' | 'standard' | 'vip'
}
