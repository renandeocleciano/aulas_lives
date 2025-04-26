export interface Employee {
  getName(): string;
  getSalary(): number;
  showDetails(indent?: string): void;
}
