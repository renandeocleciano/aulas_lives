import { BankFactory } from "../interfaces/bank.factory.interface";
import { CancelService } from "../interfaces/cancel.service.interface";
import { ChargeService } from "../interfaces/charge.service.interface";
import { InterCancelService } from "./inter-cancel.service";
import { InterChargeService } from "./inter-charge.service";

export class InterBankFactory implements BankFactory {
  createChargeService(): ChargeService {
    return new InterChargeService();
  }

  createCancelService(): CancelService {
    return new InterCancelService();
  }
}
