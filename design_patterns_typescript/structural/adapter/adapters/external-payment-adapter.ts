import { ExternalPaymentRequest } from "../interfaces/external-payment-request.interface";
import { PaymentRequest } from "../interfaces/payment-request.interface";

export class ExternalPaymentAdapter {
  constructor(private externalRequest: ExternalPaymentRequest) {}

  public toInternal(): PaymentRequest {
    return {
      totalAmount: this.externalRequest.amount_in_cents / 100,
      payerName: this.externalRequest.full_name,
      payerDocument: this.externalRequest.document_id,
    };
  }
}
