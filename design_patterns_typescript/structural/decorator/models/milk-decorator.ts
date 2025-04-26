import { Coffee } from "../interfaces/coffee.interface";

export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 2.0;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", Leite";
  }
}
