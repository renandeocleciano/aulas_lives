# 🏛️ Facade Pattern (Padrão de Fachada)

## 🧠 O que é?

O **Facade Pattern** é um padrão estrutural que fornece **uma interface simplificada** para um conjunto de classes ou subsistemas complexos.

Ele esconde a complexidade e oferece uma maneira fácil de interagir com o sistema.

---

## ✅ Quando usar

- Quando você quer **esconder a complexidade** de um sistema interno.
- Quando deseja **fornecer uma API mais amigável** para usuários/clientes.
- Quando precisa **desacoplar** o cliente do subsistema.

**Exemplos reais:**
- APIs de serviços de pagamento
- Controle remoto da TV
- Frameworks que simplificam integrações complexas

---

## 🚫 Quando evitar

- Quando o sistema é pequeno e não há muita complexidade.
- Se a facade adicionaria mais camadas desnecessárias de abstração.

---

## 💡 Exemplo prático: Sistema de Compra Online

Imagine um sistema de compras onde, para concluir uma venda, é necessário:
- Verificar estoque
- Processar pagamento
- Gerar nota fiscal
- Notificar o cliente

Com o **Facade**, criamos uma única classe `ShopFacade` que orquestra tudo isso com um único método `checkout()`.

---

## 💻 Implementação em TypeScript

### Serviços Individuais

```ts
export class InventoryService {
  checkStock(productId: string): boolean {
    console.log("Verificando estoque...");
    return true;
  }
}
```

```ts
export class PaymentService {
  processPayment(amount: number): void {
    console.log("Processando pagamento...");
  }
}
```

```ts
export class InvoiceService {
  generateInvoice(productId: string, amount: number): void {
    console.log("Gerando nota fiscal...");
  }
}
```

```ts
export class NotificationService {
  notifyUser(userId: string): void {
    console.log("Notificando usuário...");
  }
}
```

### Facade

```ts
export class ShopFacade {
  private inventoryService = new InventoryService();
  private paymentService = new PaymentService();
  private invoiceService = new InvoiceService();
  private notificationService = new NotificationService();

  public checkout(userId: string, productId: string, amount: number): void {
    if (this.inventoryService.checkStock(productId)) {
      this.paymentService.processPayment(amount);
      this.invoiceService.generateInvoice(productId, amount);
      this.notificationService.notifyUser(userId);
      console.log("✅ Compra concluída!");
    } else {
      console.log("❌ Produto fora de estoque.");
    }
  }
}
```

### Uso

```ts
const shop = new ShopFacade();
shop.checkout("user123", "prod456", 199.90);
```

---

## 🧪 Benefícios

- Simplifica a interação com sistemas complexos
- Reduz acoplamento entre cliente e subsistema
- Facilita manutenção e evolução do sistema

---

## ⚠️ Cuidados

- Pode ocultar funcionalidades importantes se mal projetado
- Se não houver complexidade real, pode adicionar camadas desnecessárias

---

## 📚 Resumo

| Prós                              | Contras                        |
|-----------------------------------|---------------------------------|
| Simples para o cliente            | Pode esconder detalhes importantes |
| Desacopla sistema interno         | Camadas extras se mal utilizado |
| Facilita manutenção e evolução    | |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
