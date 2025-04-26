# 🔌 Adapter Pattern (Padrão de Adaptador)

## 🧠 O que é?

O **Adapter Pattern** é um padrão estrutural que permite **conectar interfaces incompatíveis**.  
Ele "adapta" uma interface para outra que o sistema espera.

---

## ✅ Quando usar

- Quando você precisa integrar **sistemas que falam "línguas diferentes"**.
- Quando quer **reutilizar um componente** que não é diretamente compatível.
- Quando deseja **desacoplar** seu sistema de mudanças externas.

---

## 🚫 Quando evitar

- Quando é possível modificar diretamente o código de uma das partes (não precisa adaptar).
- Se a adaptação complica mais do que simplifica.

---

## 💡 Exemplo prático: Integração com Sistema de Pagamento Externo

Nosso sistema interno espera um formato de pagamento:

```ts
interface PaymentRequest {
  totalAmount: number;
  payerName: string;
  payerDocument: string;
}
```

Mas o sistema externo fornece:

```ts
interface ExternalPaymentRequest {
  amount_in_cents: number;
  full_name: string;
  document_id: string;
}
```

Para integrar sem alterar o sistema interno, usamos um **Adapter**.

---

## 💻 Implementação em TypeScript

### Interface interna

```ts
export interface PaymentRequest {
  totalAmount: number;
  payerName: string;
  payerDocument: string;
}
```

### Interface externa

```ts
export interface ExternalPaymentRequest {
  amount_in_cents: number;
  full_name: string;
  document_id: string;
}
```

### Serviço que espera o formato interno

```ts
export class PaymentService {
  public processPayment(payment: PaymentRequest): void {
    console.log("✅ Pagamento processado:", payment);
  }
}
```

### Adapter que converte

```ts
export class ExternalPaymentAdapter {
  constructor(private externalRequest: ExternalPaymentRequest) {}

  public toInternal(): PaymentRequest {
    return {
      totalAmount: this.externalRequest.amount_in_cents / 100,
      payerName: this.externalRequest.full_name,
      payerDocument: this.externalRequest.document_id,
    };
  }
}
```

### Uso no sistema

```ts
const externalRequest: ExternalPaymentRequest = { ... };

const adapter = new ExternalPaymentAdapter(externalRequest);
const internalPayment = adapter.toInternal();

const paymentService = new PaymentService();
paymentService.processPayment(internalPayment);
```

---

## 🧪 Benefícios

- Permite integração entre sistemas de forma segura e controlada
- Ajuda na manutenção desacoplando seu sistema de APIs externas
- Facilita substituição de integrações no futuro

---

## ⚠️ Cuidados

- Cuidado para não criar muitos Adapters desnecessariamente (poluição de código)
- Em casos complexos, talvez seja necessário validar dados além da simples adaptação

---

## 📚 Resumo

| Prós                           | Contras                         |
|---------------------------------|----------------------------------|
| Integra sistemas diferentes     | Pode adicionar complexidade extra |
| Mantém código interno limpo     | Pode mascarar problemas de design |
| Flexível para mudanças externas | Pode gerar muitos arquivos       |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
