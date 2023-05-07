# Minimal tRPC project

### Description

---

This is a minimal trpc server and client that run on a standalone server without.

The project consists of a server folder which defines a db.ts to mock a primsa client. `trpc.ts` instantiates an instance of the the trpc back end and exports the router and publicProcedure method which exists on this instance. `index.ts` defines most of the back end logic. It defines a few procedures that can be called to find users, a user or create a user. It also instantiates an http server with the trpc appRouter.

The client folder contains a simple `index.ts` which creates what is called a proxy client. This proxy client is a proxy which forwards RPC's from the front end to the back end. This proxy also provides type checking on the front end which is a major feature of using tRPC. Two requests are made to the back end server as well, (1) to get a user with the `id` of 1, and another to create a user.

### Goal

---

The goal of this project was to familiarize myself with the tRPC architecture by coding a minimal trpc server-client following the official docs.

---

### Running

---

To start the server run `npx tsx watch server`, and then to have the client run use `npx wait-port 3000 && npx tsx watch client`
