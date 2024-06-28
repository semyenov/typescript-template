import { createAjv } from '@/ajv'
import { bullmq } from '@/bullmq'
import { createRedisStore } from '@/redis'

// import { createMongoDBStore } from '@/mongodb'

import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

export type Context = Awaited<ReturnType<typeof createContext>>
export type CreateContextOptions =
  | CreateHTTPContextOptions
  | CreateWSSContextFnOptions

const ajv = await createAjv()
const redis = await createRedisStore()
// const mongodb = await createMongoDBStore()

export async function createContext(
  _opts: CreateContextOptions,
) {
  return {
    ajv,
    redis,
    bullmq,
    // mongodb,
  }
}