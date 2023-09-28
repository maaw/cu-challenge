import { gql } from '@apollo/client';

export const GET_DELIVERIES = gql`
  query {
    deliveries {
      id
      date
    }
  }
`;

export const GET_DELIVERY_DETAILS = gql`
  query Delivery($id: ID!) {
    delivery(id: $id) {
      id
      date
      products {
        id
        name
        description
        price
        picture
      }
    }
  }
`;

export default GET_DELIVERIES;
