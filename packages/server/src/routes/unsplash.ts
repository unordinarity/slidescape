import { RouteOptions } from 'fastify'
import fetch, { BodyInit } from 'node-fetch'

import { config } from '../shared/config'

const prefix = 'unsplash'

export const unsplashRoute: RouteOptions = {
  url: `/${prefix}/*`,
  method: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  handler: async (request, reply) => {
    const url = new URL(request.url, config.unsplash.host)
    url.pathname = url.pathname.split('/').filter(p => p !== prefix).join('/')
    url.searchParams.set('client_id', config.unsplash.access)
    const response = await fetch(url.toString(), {
      method: request.method,
      body: request.body as BodyInit,
    })
    const encoded = await response.json()
    reply.send(encoded)
  }
}
