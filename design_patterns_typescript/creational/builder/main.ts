import { OrderBuilder } from "./order-builder";

const order = new OrderBuilder()
  .setCustomer("Renan Deocleciano")
  .addProduct("Notebook", 1)
  .addProduct("Mouse", 2)
  .setPayment("Cartão de Crédito")
  .applyDiscount(0.1)
  .setShipping(25.0)
  .setNotes("Entregar após as 18h")
  .build();

console.log("Pedido Finalizado:");
console.log(order);
