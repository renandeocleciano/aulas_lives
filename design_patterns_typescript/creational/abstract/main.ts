import { InterBankFactory } from "./inter/inter-bank.factory";
import { BankFactory } from "./interfaces/bank.factory.interface";
import { ItauBankFactory } from "./itau/itau-bank.factory";

function processBankOperations(factory: BankFactory) {
  const chargeService = factory.createChargeService();
  const cancelService = factory.createCancelService();

  chargeService.createCharge(250.0);
  cancelService.cancelCharge("123abc");
}

console.log("Usando o banco Inter:");
processBankOperations(new InterBankFactory());

console.log("\nUsando o banco Itaú:");
processBankOperations(new ItauBankFactory());
