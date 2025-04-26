import { Report } from "./abstractions/report";
import { CSVExporter } from "./implementations/csv-exporter";
import { JSONExporter } from "./implementations/json-exporter";
import { PDFExporter } from "./implementations/pdf-exporter";

const pdfReport = new Report(
  "Relatório de Vendas",
  "Conteúdo do relatório...",
  new PDFExporter()
);
const csvReport = new Report(
  "Relatório de Vendas",
  "Conteúdo do relatório...",
  new CSVExporter()
);
const jsonReport = new Report(
  "Relatório de Vendas",
  "Conteúdo do relatório...",
  new JSONExporter()
);

pdfReport.export();
csvReport.export();
jsonReport.export();
