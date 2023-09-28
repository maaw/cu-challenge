// Mocks products
const products = [
  {
    id: '1',
    name: 'Product 1',
    picture:
      'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    picture:
      'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 100,
  },
  {
    id: '3',
    name: 'Product 3',
    picture:
      'https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 100,
  },
];

// Mock delivery data with associated product IDs and userIds
const deliveries = [
  {
    id: 1,
    date: '2023-09-27 00:00:00',
    productIds: ['1', '2'],
    userId: '1',
  },
  {
    id: 2,
    date: '2023-09-04 00:00:00',
    productIds: ['3'],
    userId: '1',
  },
  {
    id: 3,
    date: '2023-08-01 00:00:00',
    productIds: ['3'],
    userId: '2',
  },
];

export async function fetchDeliveries(args: {
  userId: string;
}): Promise<any[]> {
  // Filter deliveries based on the provided userId
  const userDeliveries = deliveries.filter(
    (delivery) => delivery.userId === args.userId
  );

  if (!userDeliveries) {
    throw new Error(`Deliveries for user ID ${args.userId} not found`);
  }

  return userDeliveries;
}

export async function fetchDeliveryWithProducts(args: {
  id: string;
}): Promise<any> {
  const delivery = deliveries.find((d) => d.id === parseInt(args.id, 10));

  if (!delivery) {
    throw new Error(`Delivery with ID ${args.id} not found`);
  }

  const deliveryWithProducts = {
    ...delivery,
    products: products.filter((product) =>
      delivery.productIds.includes(product.id)
    ),
  };

  return deliveryWithProducts;
}
