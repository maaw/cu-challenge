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
    products: [Product!]! # Add a products field to Delivery
  }
  
  type Query {
    deliveries: [Delivery!]!
    products: [Product!]!
    delivery(id: ID!): Delivery 
    product(id: ID!): Product
  }
`);
