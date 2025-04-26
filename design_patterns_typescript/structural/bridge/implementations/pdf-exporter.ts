import { Exporter } from "../interfaces/exporter.interface";

export class PDFExporter implements Exporter {
  export(title: string, content: string): void {
    console.log("Exportando PDF:");
    console.log({
      formato: "PDF",
      titulo: title,
      conteudo: content,
    });
  }
}
