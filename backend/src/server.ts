import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import { config } from './config'
import { MetadataRepo } from './database/repositories/metadata'
import { logger } from './services/logger'
import { EventRepo } from './database/repositories/event'

const port = config.get('server.port')

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

export type Context = {
  dataSources: {
    metaData: MetadataRepo
    eventData: EventRepo
  }
}

const server = new ApolloServer<Context>({
  typeDefs: schemas,
  resolvers,
})

async function runServer() {
  const { url } = await startStandaloneServer<Context>(server, {
    context: async ({}) => {
      const metaData = new MetadataRepo()
      const eventData = new EventRepo()
      const dataSources = { metaData, eventData }

      return { dataSources }
    },

    listen: { port },
  })
  return url
}

runServer().then((url) => {
  logger.info(`server is up and running at ${url}`)
})
