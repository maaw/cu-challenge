import { FC, useState } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

import Delivery from '../../models/Delivery';

import { useQuery } from '@apollo/client';
import GET_DELIVERIES from '../../graphql/queries';

export const DeliveriesPage: FC = () => {
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | any>();

  //Get deliveries from graphql API
  const { loading, error, data } = useQuery(GET_DELIVERIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const deliveries = data.deliveries;

  return (
    <>
      <Header
        deliveries={deliveries}
        selectedDelivery={selectedDelivery}
        setSelectedDelivery={setSelectedDelivery}
      />
      <Main
        deliveryId={
          selectedDelivery === undefined
            ? deliveries[0].id
            : selectedDelivery.id
        }
      />
    </>
  );
};
