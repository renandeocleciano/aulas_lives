# 🏭 Factory Method Pattern (Padrão de Fábrica)

## 🧠 O que é?

O **Factory Method** é um padrão de projeto criacional que fornece uma **interface para criar objetos** em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

---

## ✅ Quando usar

- Quando o código precisa **instanciar objetos com base em lógica condicional**.
- Quando você quer **evitar o uso direto de `new`** espalhado pela aplicação.
- Quando você precisa manter o código **desacoplado e flexível para novos tipos**.

**Exemplos comuns:**
- Sistemas de envio de notificações (email, SMS, push)
- Criação de elementos de interface (botões, caixas, campos)
- Conexões com diferentes bancos de dados ou APIs

---

## 🚫 Quando evitar

- Quando o objeto a ser criado é simples e direto.
- Se não há variação na criação — o uso direto de `new` pode ser suficiente.
- Em sistemas pequenos onde a separação extra não compensa.

---

## 📦 Exemplo prático: Notificações

Imagine que sua aplicação precisa enviar notificações por diferentes canais: `Email`, `SMS` e `Push`.  
Cada tipo de notificação tem sua própria lógica.  
Usando **Factory Method**, você cria uma **fábrica** que retorna a instância correta com base no tipo.

---

## 💻 Implementação em TypeScript

```ts
// notification.interface.ts
export interface Notification {
  send(message: string): void;
}
```

```ts
// email-notification.ts
export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(\`Enviando email: \${message}\`);
  }
}
```

```ts
// sms-notification.ts
export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(\`Enviando SMS: \${message}\`);
  }
}
```

```ts
// push-notification.ts
export class PushNotification implements Notification {
  send(message: string): void {
    console.log(\`Enviando Push Notification: \${message}\`);
  }
}
```

```ts
// notification-factory.ts
export class NotificationFactory {
  static createNotification(type: string): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Tipo de notificação desconhecido");
    }
  }
}
```

```ts
// main.ts
const email = NotificationFactory.createNotification("email");
email.send("Bem-vindo ao sistema!");
```

---

## 🧪 Benefícios

- Centraliza a lógica de criação
- Evita repetição de código e uso de `new` em vários lugares
- Facilita a extensão com novos tipos de objetos

---

## ⚠️ Cuidados

- Pode criar muitas classes se não for bem organizado
- O padrão exige disciplina e clareza na separação de responsabilidades

---

## 📚 Resumo

| Prós                            | Contras                          |
|----------------------------------|----------------------------------|
| Código mais desacoplado         | Overhead em sistemas simples     |
| Fácil de extender com novos tipos | Mais arquivos e organização     |
| Testável e flexível             | Pode ficar verboso em excesso    |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
