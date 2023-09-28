class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  picture: string;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    picture: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.picture = picture;
  }
}

export default Product;
