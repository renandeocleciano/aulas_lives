import { ExternalPaymentAdapter } from "./adapters/external-payment-adapter";
import { ExternalPaymentRequest } from "./interfaces/external-payment-request.interface";
import { PaymentService } from "./services/payment-service";

const externalRequest: ExternalPaymentRequest = {
  amount_in_cents: 500000,
  full_name: "Renan Deocleciano",
  document_id: "12345678900",
};

const adapter = new ExternalPaymentAdapter(externalRequest);
const internalPayment = adapter.toInternal();

const paymentService = new PaymentService();
paymentService.processPayment(internalPayment);
