export class InvoiceService {
  public generateInvoice(productId: string, amount: number): void {
    console.log(
      `Gerando nota fiscal para o produto ${productId} no valor de R$${amount}...`
    );
  }
}
