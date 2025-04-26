import { Exporter } from "../interfaces/exporter.interface";

export class CSVExporter implements Exporter {
  export(title: string, content: string): void {
    console.log("Exportando CSV:");
    console.log(`${title};${content}`);
  }
}
