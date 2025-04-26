import { PaymentRequest } from "../interfaces/payment-request.interface";

export class PaymentService {
  public processPayment(payment: PaymentRequest): void {
    console.log("Pagamento processado com sucesso:");
    console.log({
      Valor: payment.totalAmount,
      Nome: payment.payerName,
      Documento: payment.payerDocument,
    });
  }
}
