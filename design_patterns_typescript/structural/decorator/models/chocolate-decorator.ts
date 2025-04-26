import { Coffee } from "../interfaces/coffee.interface";

export class ChocolateDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 2.5;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Chocolate";
  }
}
