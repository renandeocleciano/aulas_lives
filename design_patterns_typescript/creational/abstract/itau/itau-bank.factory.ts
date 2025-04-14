import { BankFactory } from "../interfaces/bank.factory.interface";
import { CancelService } from "../interfaces/cancel.service.interface";
import { ChargeService } from "../interfaces/charge.service.interface";
import { ItauCancelService } from "./itau-cancel.service";
import { ItauChargeService } from "./itau-charge.service";

export class ItauBankFactory implements BankFactory {
  createChargeService(): ChargeService {
    return new ItauChargeService();
  }

  createCancelService(): CancelService {
    return new ItauCancelService();
  }
}
