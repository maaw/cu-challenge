import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { fetchDeliveries, fetchDeliveryWithProducts } from './graphql/resolver';
import cors from 'cors';

function createServer() {
  const server = express();

  server.use('/graphql', cors());

  server.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      context: {},
      rootValue: {
        deliveries: fetchDeliveries,
        delivery: fetchDeliveryWithProducts,
      },
      graphiql: true,
    })
  );

  return server;
}

export { createServer };
