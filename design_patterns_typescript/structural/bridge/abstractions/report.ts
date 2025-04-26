import { Exporter } from "../interfaces/exporter.interface";

export class Report {
  constructor(
    private title: string,
    private content: string,
    private exporter: Exporter
  ) {}

  public export(): void {
    this.exporter.export(this.title, this.content);
  }
}
