# 🧱 Builder Pattern (Padrão de Construção)

## 🧠 O que é?

O **Builder Pattern** é um padrão de projeto criacional que permite construir objetos complexos passo a passo. Ele separa a construção de um objeto da sua representação, permitindo que o mesmo processo construa objetos diferentes.

---

## ✅ Quando usar

- Quando você precisa criar objetos com **muitos parâmetros opcionais**
- Quando a construção do objeto **é feita em etapas**
- Quando deseja **encadear chamadas** com fluidez (`builder.setX().setY().setZ()`)

---

## 🚫 Quando evitar

- Quando o objeto pode ser criado com um simples `new`
- Quando não há variação significativa na configuração
- Quando o encadeamento adiciona complexidade desnecessária

---

## 💡 Exemplo prático: Criação de um Pedido (Order)

Neste exemplo, usamos o padrão Builder para criar um pedido com:
- Cliente
- Lista de produtos
- Forma de pagamento
- Desconto
- Frete
- Comentários adicionais

Nem todos os campos são obrigatórios, e o código fica **limpo e organizado** com o uso do builder.

---

## 💻 Implementação em TypeScript

### Modelo de pedido

```ts
export interface Product {
  name: string;
  quantity: number;
}

export class Order {
  constructor(
    public customer: string,
    public products: Product[],
    public paymentMethod: string,
    public discount: number,
    public shipping: number,
    public notes?: string
  ) {}
}
```

### Builder encadeado

```ts
export class OrderBuilder {
  private customer!: string;
  private products: Product[] = [];
  private paymentMethod = "Não definido";
  private discount = 0;
  private shipping = 0;
  private notes?: string;

  setCustomer(name: string): this {
    this.customer = name;
    return this;
  }

  addProduct(name: string, quantity: number): this {
    this.products.push({ name, quantity });
    return this;
  }

  setPayment(method: string): this {
    this.paymentMethod = method;
    return this;
  }

  applyDiscount(percent: number): this {
    this.discount = percent;
    return this;
  }

  setShipping(value: number): this {
    this.shipping = value;
    return this;
  }

  setNotes(notes: string): this {
    this.notes = notes;
    return this;
  }

  build(): Order {
    return new Order(
      this.customer,
      this.products,
      this.paymentMethod,
      this.discount,
      this.shipping,
      this.notes
    );
  }
}
```

### Uso

```ts
const order = new OrderBuilder()
  .setCustomer("Renan")
  .addProduct("Notebook", 1)
  .addProduct("Mouse", 2)
  .setPayment("Cartão")
  .applyDiscount(0.1)
  .setShipping(25.0)
  .setNotes("Entregar após as 18h")
  .build();

console.log(order);
```

---

## 🧪 Benefícios

- Código mais legível e modular
- Fácil de manter e extender
- Boa prática para objetos configuráveis

---

## ⚠️ Cuidados

- Pode ser overkill se o objeto é simples
- Cria mais arquivos/classes do que o necessário em alguns casos

---

## 📚 Resumo

| Prós                           | Contras                        |
|--------------------------------|---------------------------------|
| Encadeamento fluido            | Pode ser exagerado para objetos simples |
| Separação da lógica de construção | Requer mais arquivos           |
| Melhora a legibilidade         | Pode dificultar debug se usado indevidamente |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
