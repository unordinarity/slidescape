import Fastify  from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'

import { config } from '../shared/config'
import { winstonLogger } from '../shared/winston-logger'
import { pinoLogger } from '../shared/pino-logger'

import { unsplashRoute } from '../routes/unsplash'
import { openweatherRoute } from '../routes/openweather'

const fastify = Fastify({
  logger: process.env.mode === 'PRODUCTION' ? winstonLogger : pinoLogger,
})

fastify
  .register(fastifyCors)
  .register(fastifyHelmet)
  .route(unsplashRoute)
  .route(openweatherRoute)

fastify.listen(config.server.port).then()
