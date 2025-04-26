import { Employee } from "../interfaces/employee.interface";

export class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public showDetails(indent: string = ""): void {
    console.log(
      `${indent}- Desenvolvedor: ${this.name} | Salário: R$${this.salary}`
    );
  }
}
