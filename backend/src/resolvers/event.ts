import { GraphQLFieldResolver } from 'graphql'
import { Context } from '../server'
import { EventData } from '../models/event'
import { NotFoundError } from '../errors/bad-requests'
import { CursorBasedList } from '../models/pagination'

const events: GraphQLFieldResolver<
  any,
  Context,
  { limit?: number; after?: string },
  Promise<CursorBasedList<EventData>>
> = async (_, { limit = 10, after }, { dataSources: { eventData } }) => {
  const data = await eventData.getAllWithPage(limit, after)
  return data
}

const event: GraphQLFieldResolver<
  any,
  Context,
  { id: string },
  Promise<EventData>
> = async (_, { id }, { dataSources: { eventData } }) => {
  const data = await eventData.get(id)

  if (!data) {
    throw new NotFoundError({ id })
  }

  return data
}

export default {
  Query: {
    events,
    event,
  },
}
