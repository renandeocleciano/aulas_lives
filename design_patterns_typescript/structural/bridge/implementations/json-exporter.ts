import { Exporter } from "../interfaces/exporter.interface";

export class JSONExporter implements Exporter {
  export(title: string, content: string): void {
    console.log("Exportando JSON:");
    console.log(JSON.stringify({ title, content }, null, 2));
  }
}
