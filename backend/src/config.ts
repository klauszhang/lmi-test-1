import convict from 'convict'
import path from 'path'

const config = convict({
  server: {
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3001,
      env: 'PORT',
    },
  },

  env: {
    doc: 'node environment',
    env: 'NODE_ENV',
    format: ['production', 'development', 'test'],
    nullable: false,
    default: 'development',
  },
  loglevel: {
    doc: 'log level',
    env: 'LOG_LEVEL',
    format: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
    nullable: false,
    default: 'debug',
  },
})

const env = config.get('env')

if (env === 'development') {
  config.loadFile(path.resolve(__dirname, '../.env.json'))
}

export { config }
