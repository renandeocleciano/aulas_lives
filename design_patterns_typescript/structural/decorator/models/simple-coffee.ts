import { Coffee } from "../interfaces/coffee.interface";

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5.0;
  }

  getDescription(): string {
    return "Café simples";
  }
}
