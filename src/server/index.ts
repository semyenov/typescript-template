import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { applyWSSHandler } from '@trpc/server/adapters/ws'
import consola from 'consola'
import { WebSocketServer } from 'ws'

import { createContext } from './context'
import { appRouter } from './router'

import type { AppRouter } from './router'

const logger = consola.withTag('server')

export const app = createHTTPServer({
  router: appRouter,
  createContext,

  batching: { enabled: true },

  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      logger.error('Something went wrong', error)
    }
  },
})

const wss = new WebSocketServer(app)
applyWSSHandler<AppRouter>({
  wss,
  router: appRouter,
  batching: { enabled: true },
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      logger.error('Something went wrong', error)
    }
  },
  createContext,
})

app.listen(4000)
