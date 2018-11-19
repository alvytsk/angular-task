export class Product {
  public name: string;
  public shortDescription: string;
  public imagePath: string;
  public price: number;
  public amount: number;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    price: number,
    amount: number
  ) {
    this.name = name;
    this.shortDescription = desc;
    this.imagePath = imagePath;
    this.price = price;
    this.amount = amount;
  }
}
