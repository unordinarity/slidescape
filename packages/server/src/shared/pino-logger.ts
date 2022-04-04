import pino from 'pino'
import pinoPretty from 'pino-pretty'

export const pinoLogger = pino(
  pinoPretty({
    colorize: true,
  }),
)
