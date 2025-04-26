export class InventoryService {
  public checkStock(productId: string): boolean {
    console.log(`Verificando estoque para o produto ${productId}...`);
    return true;
  }
}
