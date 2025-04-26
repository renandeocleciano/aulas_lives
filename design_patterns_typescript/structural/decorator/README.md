# 🎨 Decorator Pattern (Padrão de Decorador)

## 🧠 O que é?

O **Decorator Pattern** é um padrão estrutural que permite **adicionar funcionalidades extras a um objeto dinamicamente**, sem alterar sua estrutura original.

Em vez de criar subclasses para cada variação, o Decorator permite **encadear comportamentos**.

---

## ✅ Quando usar

- Quando você quer adicionar **responsabilidades extras** a objetos de forma flexível.
- Quando quer seguir o princípio **Aberto/Fechado** (Open/Closed Principle).
- Quando criar subclasses para cada variação seria inviável.

**Exemplos reais:**
- Middleware em APIs (autenticação, log, compressão)
- Personalização de pedidos (adicionar extras em produtos)
- Fluxos de entrada/saída (streams de dados encadeados)

---

## 🚫 Quando evitar

- Se o número de combinações é pequeno e pode ser gerenciado com simples subclasses.
- Se o encadeamento de decoradores tornar o código difícil de entender.

---

## 💡 Exemplo prático: Sistema de Cafeteria

Neste exemplo:
- Um **Café simples** pode receber adicionais como **leite**, **chantilly** e **chocolate**.
- Cada adicional modifica o custo e a descrição do café original.

---

## 💻 Implementação em TypeScript

### Interface Coffee

```ts
export interface Coffee {
  getCost(): number;
  getDescription(): string;
}
```

### Classe base

```ts
export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return "Café simples";
  }
}
```

### Decorators

```ts
export class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", leite";
  }
}
```

```ts
export class WhipDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 3;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", chantilly";
  }
}
```

```ts
export class ChocolateDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  getCost(): number {
    return this.coffee.getCost() + 4;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", chocolate";
  }
}
```

### Uso no sistema

```ts
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new WhipDecorator(coffee);
coffee = new ChocolateDecorator(coffee);

console.log(coffee.getDescription() + " = R$" + coffee.getCost());
```

---

## 🧪 Benefícios

- Permite adicionar comportamentos dinamicamente
- Evita a explosão de subclasses
- Mantém o código flexível e extensível

---

## ⚠️ Cuidados

- Muitos decoradores encadeados podem dificultar a leitura e depuração
- Pode aumentar a complexidade se não for bem controlado

---

## 📚 Resumo

| Prós                             | Contras                        |
|----------------------------------|---------------------------------|
| Flexível para adicionar comportamentos | Pode tornar o código mais difícil de entender |
| Mantém o princípio Aberto/Fechado | Encadeamento excessivo          |
| Evita criação excessiva de subclasses | Maior esforço de manutenção     |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
