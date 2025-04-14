import { ChargeService } from "../interfaces/charge.service.interface";

export class InterChargeService implements ChargeService {
  createCharge(amount: number): void {
    console.log(`💰 [Inter] Criando cobrança no valor de R$${amount}`);
  }
}
