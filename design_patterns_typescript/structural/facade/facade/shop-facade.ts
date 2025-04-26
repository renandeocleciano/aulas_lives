import { InventoryService } from "../services/inventory.service";
import { InvoiceService } from "../services/invoice.service";
import { NotificationService } from "../services/notification.service";
import { PaymentService } from "../services/payment.service";

export class ShopFacade {
  private inventoryService = new InventoryService();
  private paymentService = new PaymentService();
  private invoiceService = new InvoiceService();
  private notificationService = new NotificationService();

  public checkout(userId: string, productId: string, amount: number): void {
    if (this.inventoryService.checkStock(productId)) {
      this.paymentService.processPayment(amount);
      this.invoiceService.generateInvoice(productId, amount);
      this.notificationService.notifyUser(userId);
      console.log("Compra concluída com sucesso!");
    } else {
      console.log("Produto fora de estoque.");
    }
  }
}
