import { Employee } from "../interfaces/employee.interface";

export class Manager implements Employee {
  private team: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  public add(employee: Employee): void {
    this.team.push(employee);
  }

  public remove(employee: Employee): void {
    this.team = this.team.filter((e) => e !== employee);
  }

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public showDetails(indent: string = ""): void {
    console.log(`${indent}+ Gerente: ${this.name} | Salário: R$${this.salary}`);
    for (const employee of this.team) {
      employee.showDetails(indent + "  ");
    }
  }
}
