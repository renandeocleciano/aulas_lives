import { Coffee } from "../interfaces/coffee.interface";

export class WhipDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 3.0;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Chantilly";
  }
}
