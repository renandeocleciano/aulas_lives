# 🔒 Singleton Pattern (Padrão Singleton)

## 🧠 O que é?

O **Singleton** é um padrão de projeto criacional que garante que uma classe tenha **apenas uma única instância** e fornece um ponto global de acesso a ela.

---

## ✅ Quando usar

- Quando você precisa de **uma única fonte de verdade**, como:
  - Configurações globais da aplicação
  - Conexão com banco de dados
  - Cache compartilhado
  - Logger de sistema

---

## 🚫 Quando evitar

- Quando o sistema exige **escalabilidade e concorrência**, e múltiplas instâncias são desejáveis.
- Quando você quer evitar **dependência global oculta** (dificulta testes e manutenção).
- Quando o padrão **infringe o princípio da responsabilidade única**.

---

## 🧩 Exemplo prático: Logger

Imagine um **sistema de logs** onde todos os módulos da sua aplicação devem gravar mensagens.  
Você quer **garantir que todos usem a mesma instância**, para centralizar e controlar os registros.

---

## 💻 Implementação em TypeScript

```ts
// logger.ts
export class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const time = new Date().toISOString();
    console.log(`[${time}] - ${message}`);
  }
}
```

```ts
// main.ts
import { Logger } from "./logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Usuário entrou no sistema.");
logger2.log("Erro ao buscar dados.");

console.log(logger1 === logger2); // true
```

---

## 🧪 Benefícios

- Controle único de instância
- Evita múltiplas criações desnecessárias
- Fácil de acessar em toda a aplicação

---

## ⚠️ Cuidados

- Dificulta testes unitários (pode ser contornado com injeção de dependência)
- Pode virar "objeto Deus" se não for bem delimitado
- Acoplamento global implícito

---

## 📚 Resumo

| Prós                        | Contras                         |
|-----------------------------|----------------------------------|
| Fácil de implementar        | Quebra SRP                      |
| Evita instâncias duplicadas | Dificulta testes                |
| Acesso global               | Pode virar dependência oculta  |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
