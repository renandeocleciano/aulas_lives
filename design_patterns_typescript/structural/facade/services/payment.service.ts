export class PaymentService {
  public processPayment(amount: number): void {
    console.log(`Processando pagamento no valor de R$${amount}...`);
  }
}
