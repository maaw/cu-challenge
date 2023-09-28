import { buildSchema } from 'graphql';

export const schema = buildSchema(`

  type Product {
    id: ID!
    name: String!
    picture: String!
    description: String!
    price: Float!
  }
  
  type Delivery {
    id: ID!
    date: String!
    products: [Product!]!
    userId: ID!
  }
  
  type Query {
    deliveries(userId: ID!): [Delivery!]!
    delivery(id: ID!): Delivery 
  }
  
`);
