import { CancelService } from "../interfaces/cancel.service.interface";

export class ItauCancelService implements CancelService {
  cancelCharge(chargeId: string): void {
    console.log(`[Itaú] Cancelando cobrança com ID: ${chargeId}`);
  }
}
