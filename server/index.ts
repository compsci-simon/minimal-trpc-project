import { db } from './db'
import { publicProcedure, router } from './trpc'
import { z } from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone'

const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      const users = await db.user.findMany()

      return users
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts

      const user = db.user.findById(input)

      return user
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts
      const user = db.user.create(input)

      return user
    })
})

const server = createHTTPServer({
  router: appRouter
})

server.listen(3000)

export type AppRouter = typeof appRouter