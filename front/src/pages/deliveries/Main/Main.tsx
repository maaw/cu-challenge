import React from 'react';
import { useQuery } from '@apollo/client';
import { SubHeader } from './SubHeader/SubHeader';
import './Main.scss';
import Product from '../../../models/Product';
import Delivery from '../../../models/Delivery';
import { GET_DELIVERY_DETAILS } from '../../../graphql/queries';

interface MainProps {
  deliveryId: string; // Pass the ID of the selected delivery as a prop
}

export const Main: React.FC<MainProps> = ({ deliveryId }) => {
  const { loading, error, data } = useQuery(GET_DELIVERY_DETAILS, {
    variables: { id: deliveryId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const delivery: Delivery = data.delivery;

  return (
    <main className="page__main">
      <SubHeader delivery={delivery} />
      <div className="products-grid page__horizontal-space page__vertical-space">
        {delivery.products.map((product: Product) => (
          <div
            className="product-card"
            data-test-id="product-card"
            key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.picture} alt={product.name} />
          </div>
        ))}
      </div>
    </main>
  );
};
