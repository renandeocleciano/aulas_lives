import { CancelService } from "./cancel.service.interface";
import { ChargeService } from "./charge.service.interface";

export interface BankFactory {
  createChargeService(): ChargeService;
  createCancelService(): CancelService;
}
