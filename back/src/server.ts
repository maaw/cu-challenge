import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { fetchDeliveries } from './graphql/resolver';

function createServer() {
  const server = express();

  server.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: {
        fetchDeliveries,
      },
      graphiql: true,
    })
  );

  return server;
}

export { createServer };
