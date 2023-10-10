import pino, { DestinationStream, LoggerOptions } from 'pino'
import { config } from '../config'

const loggerConfig: LoggerOptions | DestinationStream = {
  level: config.get('loglevel'),
}

if (config.get('env') !== 'production') {
  loggerConfig.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  }
}

export const logger = pino(loggerConfig)
