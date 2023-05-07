import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server'

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000'
    })
  ]
})

trpc.userById.query('1').then(resp => {
  console.log('resp1', resp)
})

trpc.userCreate.mutate({ name: 'sachinraja' }).then(resp => {
  console.log('resp2', resp)
})