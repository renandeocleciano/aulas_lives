import { CancelService } from "../interfaces/cancel.service.interface";

export class InterCancelService implements CancelService {
  cancelCharge(chargeId: string): void {
    console.log(`[Inter] Cancelando cobrança com ID: ${chargeId}`);
  }
}
