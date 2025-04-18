# 🚀 Projeto Educacional: Comunicação P2P com Node.js, WebRTC e Gestos

## 🎯 Objetivo
Criar uma aplicação interativa onde alunos se conectam via navegador no celular,
escaneiam um QR Code e, com gestos captados pela câmera, interagem em tempo real com a tela do "host".

## 🧠 O que iremos aprender
- Como funciona WebRTC e conexões P2P
- Como WebSocket é usado para "signaling"
- Como capturar e processar gestos com a câmera usando MediaPipe
- Como expor aplicações locais usando Cloudflare Tunnel
- Como integrar frontend moderno com backend leve
- Como lidar com comunicação em tempo real de forma didática e divertida

## 🛠️ Tecnologias utilizadas
- Node.js + TypeScript (backend)
- WebSocket (`ws`)
- Vite + Vanilla TypeScript (frontend)
- MediaPipe Hands
- Html5-qrcode
- Cloudflare Tunnel
- WebRTC (RTCPeerConnection, RTCDataChannel)

---

## 📦 Estrutura do Projeto

```
projeto/
├── server/             # Signaling WebSocket Server (Node.js)
├── client/             # Frontend com Vite (controller e screen)
│   ├── src/
│   │   ├── controller.ts
│   │   ├── screen.ts
│   │   ├── peer.ts
│   ├── controller.html
│   ├── screen.html
│   ├── style.css
```

---

## 🚀 Iniciando o projeto

### 1. Iniciar servidor signaling
```bash
cd server
npm install
npm run dev
```

### 2. Expor signaling via Cloudflare Tunnel
```bash
cloudflared tunnel --url http://localhost:3000
```

### 3. Iniciar frontend
```bash
cd client
npm install
npm run dev
```

### 4. Expor frontend com ngrok (ou localtunnel) (opcional)
```bash
npx ngrok http 5173
```

---

## 📸 Fluxo da Aplicação

1. O `screen.html` é aberto no computador do professor
2. Ele exibe o QR Code com o ID de conexão do signaling
3. O aluno acessa o link via celular e escaneia o QR
4. É feita a negociação P2P (WebRTC offer/answer/candidates)
5. Ao clicar em "Iniciar câmera", MediaPipe começa a capturar gestos
6. Os gestos são enviados via RTCDataChannel ao host
7. A tela do host mostra reações, contagem e ranking dos gestos

---

## 💡 Arquivos e Explicações (a ser detalhado em sequência)
- `server/src/index.ts` → inicia servidor e WebSocket
- `client/src/controller.ts` → conecta ao signaling, captura câmera e envia gestos
- `client/src/screen.ts` → responde a conexão, exibe os gestos e ranking
- `client/src/peer.ts` → abstrai criação de offer/answer/canal
- `controller.html` e `screen.html` → páginas do frontend
- `style.css` → tema visual sci-fi, responsivo e interativo

---
