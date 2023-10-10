import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import { config } from './config'
import { MetadataRepo } from './database/repositories/metadata'
import { logger } from './services/logger'

const port = config.get('server.port')

const schemas = loadFilesSync(path.join(__dirname, '/schemas'))
const resolvers = loadFilesSync(path.join(__dirname, '/resolvers'))

export type Context = {
  dataSources: {
    metaData: MetadataRepo
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
      const dataSources = { metaData }

      return { dataSources }
    },

    listen: { port },
  })
  return url
}

runServer().then((url) => {
  logger.info(`server is up and running at ${url}`)
})
