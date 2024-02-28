import { Queue } from 'bullmq'

// Create a new Queue
export const queue = new Queue<
{ message: string },
{ status: number }
>('appQueue', {
  connection: {
    host: 'redis',
    port: 6379,
  },
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: false,
  },
})
