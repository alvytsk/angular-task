export class Product {
  public name: string;
  public shortDescription: string;
  public imagePath: string;
  public price: number;
  public quantity: number;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    price: number,
    quantity: number
  ) {
    this.name = name;
    this.shortDescription = desc;
    this.imagePath = imagePath;
    this.price = price;
    this.quantity = quantity;
  }
}
