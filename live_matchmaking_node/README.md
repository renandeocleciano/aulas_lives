# 🎮 API de Matchmaking - Node.js + TypeScript + RabbitMQ

Projeto construído ao vivo no dia **05/03/2025**, em uma live com foco educacional, utilizando:

- 🟨 **Node.js + TypeScript**
- 🐰 **RabbitMQ**
- 🐳 **Docker**
- ⚙️ Arquitetura desacoplada para **matchmaking de partidas**

---

## 🧠 Objetivo do Projeto

Criar uma API backend simples e performática para realizar **matchmaking de jogadores**, utilizando um sistema de mensagens assíncronas com RabbitMQ para escalar o processamento das partidas.

---

## 🏗️ Tecnologias Utilizadas

| Tecnologia   | Função                                   |
|--------------|-------------------------------------------|
| Node.js      | Runtime JavaScript no backend             |
| TypeScript   | Tipagem estática para maior robustez      |
| Express      | Framework para construção da API          |
| RabbitMQ     | Broker de mensagens assíncronas           |
| Docker       | Contêinerização do ambiente               |
| Docker Compose | Orquestração local dos serviços         |

---

## 🧩 Funcionalidades

- 📥 API REST para envio de jogadores à fila de matchmaking
- 📤 Sistema assíncrono para processar os jogadores em tempo real
- 🎲 Agrupamento dos jogadores por "skill" (nível de habilidade)
- 🔄 Criação e resposta de partidas por workers consumidores do RabbitMQ
- 🧪 Projeto estruturado para facilitar testes e evolução modular

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/renandeocleciano/aulas_lives.git
cd aulas_lives
```

### 2. Suba os containers com Docker

```bash
docker-compose up --build
```

### 3. Endpoints disponíveis

- `POST /match`  
  Envia um jogador para a fila de matchmaking.  
  Exemplo de body:
  ```json
  {
    "playerId": "abc123",
    "skill": 74
  }
  ```

---

## 🧱 Estrutura do Projeto

```
📦 src
├── controllers
│   └── match.controller.ts
├── services
│   └── match.service.ts
├── queue
│   └── match.queue.ts
├── consumer
│   └── match.consumer.ts
├── matchmaker
│   └── match.service.ts
├── config
│   └── rabbitmq.ts
└── server.ts
```

---

## 🎓 Aprendizados abordados na live

- Conceito de filas e processamento assíncrono
- Comunicação entre serviços com RabbitMQ
- Boas práticas com TypeScript em APIs
- Uso de Docker e Docker Compose para ambientes locais
- Estratégias simples de matchmaking com base em skill

---


## 📚 Material Complementar

- [Documentação do RabbitMQ](https://www.rabbitmq.com/documentation.html)
- [Curso O Novo Programador](https://onovoprogramador.com.br) — Use o cupom **Renan10**

---

## 👨‍🏫 Sobre o Professor

Projeto criado por **Renan Deocleciano**  
🔗 Instagram: [@_renant](https://www.instagram.com/_renant)  
📚 YouTube: [Canal de conteúdo técnico e aulas práticas](https://www.youtube.com/@codebyrenan)

---

## 🧪 To Do (Para estudo ou prática adicional)

- [ ] Adicionar testes automatizados
- [ ] Implementar matchmaking com regras mais avançadas
- [ ] Expor resultados da partida em outro endpoint
- [ ] Criar painel simples com WebSocket para feedback em tempo real

---

📌 Este projeto é open-source e voltado para fins educacionais. Sinta-se à vontade para estudar, adaptar e contribuir!
