import { Contract } from "./contract";

const contratoOriginal = new Contract("Empresa XPTO", "Consultoria", 5000);
contratoOriginal.print();

const contratoClone = contratoOriginal.clone();
contratoClone.setClient("Empresa YZ");
contratoClone.setValue(6500);
contratoClone.cancel();

console.log("\nContrato Clonado com alterações:");
contratoClone.print();
