# 🏗️ Abstract Factory Pattern (Padrão Fábrica Abstrata)

## 🧠 O que é?

O **Abstract Factory** é um padrão de projeto criacional que permite criar **famílias de objetos relacionados** sem depender de suas classes concretas.

---

## ✅ Quando usar

- Quando você precisa garantir que **múltiplos objetos criados sejam compatíveis entre si**.
- Quando seu sistema trabalha com **variações organizadas por família**, como diferentes gateways de pagamento, bancos, provedores, etc.
- Quando quiser manter a **lógica de criação centralizada e flexível para troca de implementações**.

---

## 🚫 Quando evitar

- Se os objetos criados **não possuem dependência entre si**.
- Quando você não precisa de **múltiplas variações combináveis de objetos**.
- Se o sistema é pequeno e **a separação extra adiciona complexidade desnecessária**.

---

## 💡 Exemplo prático: Provedores Bancários (Inter e Itaú)

Neste exemplo, usamos o Abstract Factory para representar **dois provedores bancários**:

- **Serviços**:
  - `ChargeService`: cria uma cobrança
  - `CancelService`: cancela uma cobrança

- **Fábricas**:
  - `InterBankFactory`: implementa os serviços do banco Inter
  - `ItauBankFactory`: implementa os serviços do banco Itaú

---

## 💻 Implementação em TypeScript

### Interface dos serviços

```ts
export interface ChargeService {
  createCharge(amount: number): void;
}

export interface CancelService {
  cancelCharge(chargeId: string): void;
}

export interface BankFactory {
  createChargeService(): ChargeService;
  createCancelService(): CancelService;
}
```

### Implementações do banco Inter

```ts
export class InterChargeService implements ChargeService {
  createCharge(amount: number): void {
    console.log(`[Inter] Criando cobrança de R$${amount}`);
  }
}

export class InterCancelService implements CancelService {
  cancelCharge(chargeId: string): void {
    console.log(`[Inter] Cancelando cobrança ${chargeId}`);
  }
}

export class InterBankFactory implements BankFactory {
  createChargeService(): ChargeService {
    return new InterChargeService();
  }

  createCancelService(): CancelService {
    return new InterCancelService();
  }
}
```

### Implementações do banco Itaú

```ts
export class ItauChargeService implements ChargeService {
  createCharge(amount: number): void {
    console.log(`[Itaú] Criando cobrança de R$${amount}`);
  }
}

export class ItauCancelService implements CancelService {
  cancelCharge(chargeId: string): void {
    console.log(`[Itaú] Cancelando cobrança ${chargeId}`);
  }
}

export class ItauBankFactory implements BankFactory {
  createChargeService(): ChargeService {
    return new ItauChargeService();
  }

  createCancelService(): CancelService {
    return new ItauCancelService();
  }
}
```

### Uso no sistema

```ts
function processBankOperations(factory: BankFactory) {
  const charge = factory.createChargeService();
  const cancel = factory.createCancelService();

  charge.createCharge(250.0);
  cancel.cancelCharge("123abc");
}

processBankOperations(new InterBankFactory());
processBankOperations(new ItauBankFactory());
```

---

## 🧪 Benefícios

- Permite trocar a implementação **sem mudar o código do cliente**
- Cria objetos que trabalham bem em conjunto (compatíveis)
- Facilita testes e extensão de funcionalidades

---

## ⚠️ Cuidados

- Pode adicionar **muita complexidade** se não houver real necessidade
- Requer cuidado na organização das famílias de objetos

---

## 📚 Resumo

| Prós                              | Contras                           |
|-----------------------------------|------------------------------------|
| Cria famílias de objetos compatíveis | Estrutura pode ficar complexa      |
| Fácil de trocar implementações    | Muitas classes e arquivos          |
| Desacopla a lógica de criação     | Pode ser overkill em sistemas simples |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
