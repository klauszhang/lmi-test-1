import { CreateEvents } from './2.create-events'
import { CreateTickets } from './1.create-tickets'

const createEvents = new CreateEvents()
const createTickets = new CreateTickets()

// NOTE: DO NOT CHANGE THE ARRAY ORDER!!
// It will execute from top to bottom
export const migrations = [createTickets, createEvents]
