import { ShopFacade } from "./facade/shop-facade";

const shop = new ShopFacade();

console.log("Iniciando processo de compra...");
shop.checkout("user123", "prod456", 199.9);
