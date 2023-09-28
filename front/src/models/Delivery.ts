import Product from './Product';

class Delivery {
  id: string;
  date: string;
  products: Product[];

  constructor(id: string, date: string, products: Product[]) {
    this.id = id;
    this.date = date;
    this.products = products;
  }
}

export default Delivery;
