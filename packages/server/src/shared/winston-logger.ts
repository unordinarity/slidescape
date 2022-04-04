import { createLogger, format, transports } from 'winston'
import { FastifyLogFn, FastifyLoggerInstance, LogLevel } from 'fastify/types/logger'

const logLevels: Record<LogLevel, number> = {
  debug: 5,
  trace: 4,
  info: 3,
  warn: 2,
  error: 1,
  fatal: 0,
} as const

const formatFile = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.errors({ stack: true }),
  format.json(),
)

const formatConsole = format.combine(
  format.simple(),
  format.prettyPrint({
    colorize: true,
    depth: 2,
  })
)

const transportList = [
  new transports.File({
    format: formatFile,
    filename: 'errors.log',
    level: 'error',
  }),
  new transports.File({
    format: formatFile,
    filename: 'info.log',
    level: 'info',
  })
]

const winston = createLogger({
  transports: transportList,
  levels: logLevels,
})

const createLogMethod = (method: string): FastifyLogFn => {
  return (arg1, arg2, ...args: unknown[]) => {
    if (typeof  arg1 === 'object' && typeof arg2 === 'string') {
      winston.log(method, arg2, arg1, ...args)
    }
    if (typeof  arg1 === 'string') {
      winston.log(method, arg1, ...args)
    }
  }
}

export const winstonLogger: FastifyLoggerInstance = {
  debug: createLogMethod('debug'),
  trace: createLogMethod('trace'),
  info: createLogMethod('info'),
  warn: createLogMethod('warn'),
  error: createLogMethod('error'),
  fatal: createLogMethod('fatal'),
  child: () => winstonLogger
}
