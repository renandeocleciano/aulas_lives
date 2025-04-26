import { Developer } from "./models/developer";
import { Manager } from "./models/manager";

const dev1 = new Developer("Renan", 8000);
const dev2 = new Developer("Sybs", 7500);
const dev3 = new Developer("Vitor", 7000);

const manager1 = new Manager("Steve", 15000);
manager1.add(dev1);
manager1.add(dev2);

const ceo = new Manager("Jobs (CEO)", 30000);
ceo.add(manager1);
ceo.add(dev3);

console.log("Estrutura Organizacional:");
ceo.showDetails();
