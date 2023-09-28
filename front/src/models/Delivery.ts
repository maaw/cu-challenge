import Product from './Product';

class Delivery {
  id: string;
  date: string;
  products: Product[];
  userId: string;

  constructor(id: string, date: string, products: Product[], userId: string) {
    this.id = id;
    this.date = date;
    this.products = products;
    this.userId = userId;
  }
}

export default Delivery;
