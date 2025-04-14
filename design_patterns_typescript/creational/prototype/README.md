# 🧬 Prototype Pattern (Padrão de Protótipo)

## 🧠 O que é?

O **Prototype Pattern** é um padrão de projeto criacional que permite **criar novos objetos copiando uma instância existente**, em vez de instanciá-los do zero.

---

## ✅ Quando usar

- Quando a criação de objetos é **complexa ou custosa**
- Quando você precisa **duplicar objetos existentes com pequenas alterações**
- Quando deseja clonar objetos mantendo seu estado atual

---

## 🚫 Quando evitar

- Quando os objetos são simples e fáceis de recriar com `new`
- Quando não há necessidade real de manter estado entre cópias
- Se o processo de clonagem pode causar bugs com objetos aninhados (deep clone)

---

## 💡 Exemplo prático: Contrato de Serviço

Imagine um sistema que gera contratos para clientes com:
- Nome do cliente
- Tipo de serviço
- Valor
- Status
- Data de assinatura

Você pode usar um **contrato base** e cloná-lo para outros clientes com pequenas alterações.

---

## 💻 Implementação em TypeScript

### Classe base

```ts
export class Contract {
  constructor(
    private client: string,
    private service: string,
    private value: number,
    private status: string = "Ativo",
    private signedAt: Date = new Date()
  ) {}

  public clone(): Contract {
    return new Contract(
      this.client,
      this.service,
      this.value,
      this.status,
      this.signedAt
    );
  }

  public setClient(name: string): void {
    this.client = name;
  }

  public setValue(newValue: number): void {
    this.value = newValue;
  }

  public cancel(): void {
    this.status = "Cancelado";
  }

  public print(): void {
    console.log({
      cliente: this.client,
      serviço: this.service,
      valor: this.value,
      status: this.status,
      dataAssinatura: this.signedAt.toISOString(),
    });
  }
}
```

### Uso no sistema

```ts
const contratoOriginal = new Contract("Empresa XPTO", "Consultoria", 5000);
contratoOriginal.print();

const contratoClone = contratoOriginal.clone();
contratoClone.setClient("Empresa YZ");
contratoClone.setValue(6500);
contratoClone.cancel();

contratoClone.print();
```

---

## 🧪 Benefícios

- Permite **duplicar objetos com rapidez**
- Mantém o estado original como referência
- Evita repetição de código e lógica de construção

---

## ⚠️ Cuidados

- Objetos complexos podem exigir clonagem profunda (deep clone)
- Pode esconder mutações indesejadas se o objeto for compartilhado

---

## 📚 Resumo

| Prós                          | Contras                           |
|-------------------------------|------------------------------------|
| Clonagem rápida e controlada  | Pode causar bugs com referências  |
| Mantém o estado base          | Cuidado com objetos aninhados     |
| Ideal para reutilização       | Nem sempre necessário             |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
