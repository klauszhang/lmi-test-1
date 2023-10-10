import { GraphQLFieldResolver } from 'graphql'
import { Context } from '../server'

const keys: GraphQLFieldResolver<any, Context> = async (
  _,
  __,
  { dataSources: { metaData } }
) => {
  const keys = await metaData.getAllKeys()
  return keys
}

const get: GraphQLFieldResolver<
  any,
  Context,
  { key: string },
  Promise<string | null>
> = async (_, { key }, { dataSources: { metaData } }) => {
  const keys = await metaData.get(key)
  return keys
}

export default {
  Query: {
    database() {
      return {}
    },
  },
  Database: {
    keys,
    get,
  },
}
