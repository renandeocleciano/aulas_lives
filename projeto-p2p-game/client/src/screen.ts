import QRCode from "qrcode";
import { PeerConnectionManager } from "./peer";

const SIGNALING_URL = "ws://localhost:3000";

const socket = new WebSocket(SIGNALING_URL);

let localId = "";
const canvas = document.getElementById("qrcode") as HTMLCanvasElement;
const usersList = document.getElementById("users-list")!;
const logList = document.getElementById("log-list")!;

interface UserStats {
  openHand: number;
  closedHand: number;
}

const users = new Map<string, UserStats>();
const peers = new Map<string, PeerConnectionManager>();

// Util para timestamp
function timestamp() {
  return new Date().toLocaleTimeString();
}

// Cria o card de usuário
function updateUserList() {
  usersList.innerHTML = "";
  users.forEach((stats, userId) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>ID:</strong> ${userId}<br/>
      ✋: ${stats.openHand} &nbsp;&nbsp; ✊: ${stats.closedHand}
    `;
    usersList.appendChild(li);
  });
}

function updateRanking() {
  const rankingList = document.getElementById("ranking-list")!;
  rankingList.innerHTML = "";

  const sorted = Array.from(users.entries()).sort((a, b) => {
    const totalA = a[1].openHand + a[1].closedHand;
    const totalB = b[1].openHand + b[1].closedHand;
    return totalB - totalA;
  });

  sorted.forEach(([userId, stats], index) => {
    const li = document.createElement("li");
    li.innerHTML = `#${index + 1} - <strong>${userId}</strong>: ✋ ${
      stats.openHand
    } | ✊ ${stats.closedHand} | 🧮 Total: ${
      stats.openHand + stats.closedHand
    }`;
    rankingList.appendChild(li);
  });
}

// Registra no histórico
function logEvent(message: string) {
  const li = document.createElement("li");
  li.innerText = `[${timestamp()}] ${message}`;
  logList.prepend(li);
}

// Gera QR code com ID do host
function generateQRCode(id: string) {
  QRCode.toCanvas(canvas, id, { width: 200 }, (error) => {
    if (error) console.error("Erro ao gerar QR Code", error);
  });
}

socket.addEventListener("open", () => {
  console.log("[Signaling] Conectado ao servidor");
});

socket.addEventListener("message", async (event) => {
  const msg = JSON.parse(event.data);

  switch (msg.type) {
    case "welcome":
      localId = msg.id;
      generateQRCode(localId);
      logEvent(`Host conectado com ID ${localId}`);
      break;

    case "offer": {
      const controllerId = msg.from;
      const peer = new PeerConnectionManager(sendToSignaling);
      peer.setRemoteId(controllerId);
      peers.set(controllerId, peer);
      users.set(controllerId, { openHand: 0, closedHand: 0 });
      updateUserList();
      logEvent(`Usuário conectado: ${controllerId}`);

      peer.onMessage((data) => {
        console.log("[P2P]", controllerId, data);
        if (data.type === "gesture") {
          const stats = users.get(controllerId);
          if (stats) {
            if (data.gesture === "open-hand") stats.openHand++;
            if (data.gesture === "closed-hand") stats.closedHand++;
            updateUserList();
            updateRanking();
          }
        } else if (data.type === "qr-scan") {
          logEvent(`📷 QR lido por ${controllerId}: ${data.content}`);
        }
      });

      const answer = await peer.receiveOffer(msg.payload);
      sendToSignaling({ type: "answer", payload: answer, to: controllerId });
      break;
    }

    case "candidate": {
      const controllerId = msg.from;
      const peer = peers.get(controllerId);
      if (peer) await peer.addIceCandidate(msg.payload);
      break;
    }
  }
});

// Detectar desconexão via WebSocket
socket.addEventListener("close", () => {
  logEvent("Signaling server desconectado");
});

function sendToSignaling(msg: any) {
  socket.send(JSON.stringify({ ...msg, from: localId }));
}
