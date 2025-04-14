import { ChargeService } from "../interfaces/charge.service.interface";

export class ItauChargeService implements ChargeService {
  createCharge(amount: number): void {
    console.log(`[Itaú] Criando cobrança no valor de R$${amount}`);
  }
}
