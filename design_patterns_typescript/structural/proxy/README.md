# 🛡️ Proxy Pattern (Padrão de Proxy)

## 🧠 O que é?

O **Proxy Pattern** é um padrão estrutural que fornece um **substituto** ou **representante** de outro objeto para controlar o acesso a ele.

O proxy pode:
- Controlar o acesso
- Adicionar segurança
- Fazer cache
- Adiar a criação de objetos caros

---

## ✅ Quando usar

- Quando você quer **controlar o acesso** a um objeto.
- Quando deseja **adicionar comportamentos extras** como autenticação, cache ou lazy loading.
- Quando a criação do objeto real é **cara ou lenta** e você quer adiar.

**Exemplos reais:**
- Proxy de segurança/autenticação
- Proxy de cache de resultados
- Proxy para acesso remoto

---

## 🚫 Quando evitar

- Se o acesso direto ao objeto real é simples e não precisa de controle.
- Quando adicionar um proxy traria mais complexidade sem benefícios reais.

---

## 💡 Exemplo prático: Proxy de Banco de Dados

Imagine que temos:
- Uma conexão real com banco (`RealDatabase`).
- Um proxy (`DatabaseProxy`) que:
  - Requer autenticação antes de permitir consultas.
  - Impede acesso não autorizado.

O cliente interage com o Proxy, e **não diretamente** com o banco de dados real.

---

## 💻 Implementação em TypeScript

### Componentes

- `Database`: interface base para consultas.
- `RealDatabase`: classe que executa consultas diretamente no banco.
- `DatabaseProxy`: controla o acesso, exigindo autenticação antes de permitir consultas.

O fluxo:
- Se não autenticado → bloqueia.
- Se autenticado → repassa a consulta para o banco real.

---

## 🧪 Benefícios

- Controle de acesso seguro.
- Adição de funcionalidades extras sem alterar o objeto real.
- Possibilidade de otimizar operações pesadas.

---

## ⚠️ Cuidados

- Pode aumentar a complexidade do sistema.
- Pode introduzir latência adicional se o proxy for mal projetado.

---

## 📚 Resumo

| Prós                              | Contras                        |
|-----------------------------------|---------------------------------|
| Controle e segurança              | Pode complicar a arquitetura    |
| Flexível para adicionar comportamentos | Pode impactar a performance     |
| Ideal para objetos sensíveis ou pesados | |

---

🎥 Este conteúdo faz parte da série: **Design Patterns com TypeScript**  
🔗 Acesse o repositório principal para mais padrões: [Voltar ao índice](../README.md)
