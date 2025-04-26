import { ChocolateDecorator } from "./models/chocolate-decorator";
import { MilkDecorator } from "./models/milk-decorator";
import { SimpleCoffee } from "./models/simple-coffee";
import { WhipDecorator } from "./models/whip-decorator";

let coffee = new SimpleCoffee();
console.log("Pedido:", coffee.getDescription());
console.log("Total: R$", coffee.getCost());

coffee = new MilkDecorator(coffee);
coffee = new ChocolateDecorator(coffee);
coffee = new WhipDecorator(coffee);

console.log("\nPedido Atualizado:");
console.log("Descrição:", coffee.getDescription());
console.log("Total: R$", coffee.getCost());
