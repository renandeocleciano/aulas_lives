# 🌉 Bridge Pattern (Padrão de Ponte)

## 🧠 O que é?

O **Bridge Pattern** é um padrão estrutural que **separa a abstração da implementação**, permitindo que ambas evoluam de forma independente.

---

## ✅ Quando usar

- Quando classes e implementações mudam **independentemente**.
- Quando você quer evitar a explosão de subclasses.
- Quando precisa **desacoplar** regras de negócio das formas de execução.

**Exemplos reais:**
- Relatórios exportáveis em diferentes formatos (PDF, CSV, JSON)
- Notificações enviadas por diferentes canais (SMS, Email, Push)
- Drivers de banco de dados distintos para mesma aplicação

---

## 🚫 Quando evitar

- Quando você tem apenas uma única implementação e uma única abstração.
- Se a complexidade extra não traz real ganho de flexibilidade.

---

## 💡 Exemplo prático: Sistema de Relatórios com Exportações

Imagine que você tenha relatórios que precisam ser exportados em diferentes formatos:
- PDF
- CSV
- JSON

Cada tipo de exportação tem suas regras, mas o relatório em si não deveria se preocupar com isso.  
O **Bridge Pattern** nos permite criar novos formatos sem precisar alterar os relatórios.

---

## 💻 Implementação em TypeScript

### Interface Exporter

```ts
export interface Exporter {
  export(title: string, content: string): void;
}
```

### Implementações de Exporter

```ts
export class PDFExporter implements Exporter {
  export(title: string, content: string): void {
    console.log({ formato: "PDF", titulo: title, conteudo: content });
  }
}

export class CSVExporter implements Exporter {
  export(title: string, content: string): void {
    console.log(\`\${title};\${content}\`);
  }
}

export class JSONExporter implements Exporter {
  export(title: string, content: string): void {
    console.log(JSON.stringify({ title, content }, null, 2));
  }
}
```

### Abstração Report

```ts
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
```

### Uso no sistema

```ts
const pdfReport = new Report("Relatório de Vendas", "Conteúdo...", new PDFExporter());
pdfReport.export();

const csvReport = new Report("Relatório de Vendas", "Conteúdo...", new CSVExporter());
csvReport.export();
```

---

## 🧪 Benefícios

- Facilita a extensão para novos tipos de exportação
- Mantém código desacoplado e organizado
- Permite mudar abstrações ou implementações sem impactar o outro lado

---

## ⚠️ Cuidados

- Pode adicionar estrutura extra desnecessária em sistemas simples
- Requer planejamento adequado para ser efetivo

---

## 📚 Resumo

| Prós                              | Contras                        |
|-----------------------------------|---------------------------------|
| Desacopla abstração e implementação | Mais classes e arquivos         |
| Facilita extensão e manutenção   | Exige organização               |
| Reduz duplicação de código        | Pode parecer "overkill" em projetos pequenos |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
