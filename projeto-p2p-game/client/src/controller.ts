import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";
import { Html5Qrcode } from "html5-qrcode";
import { PeerConnectionManager } from "./peer";

const SIGNALING_URL = "ws://localhost:3000";
const socket = new WebSocket(SIGNALING_URL);

let localId = "";
let remoteId = "";
let peer: PeerConnectionManager;
let selectedFacingMode: "user" | "environment" = "environment";

const videoEl = document.getElementById("video") as HTMLVideoElement;
const startButton = document.getElementById("start") as HTMLButtonElement;
const readerContainer = document.getElementById("reader") as HTMLDivElement;
const statusText = document.getElementById("status")!;
const cameraSelect = document.getElementById(
  "cameraSelect"
) as HTMLSelectElement;

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function log(message: string) {
  const logEl = document.getElementById("log");
  if (logEl) {
    logEl.innerText = `[${new Date().toLocaleTimeString()}] ${message}\n`;
  }
}

socket.addEventListener("open", () => {
  log("[Signaling] Conectado ao servidor: " + SIGNALING_URL);
});

socket.addEventListener("message", async (event) => {
  const msg = JSON.parse(event.data);
  log(`Mensagem recebida do signaling: ${msg.type}`);

  switch (msg.type) {
    case "welcome":
      localId = msg.id;
      log(`[Signaling] ID do controller: ${localId}`);
      startQrCodeScanner();
      break;

    case "answer":
      log("Answer recebido. Conexão WebRTC deve estar ativa.");
      await peer.receiveAnswer(msg.payload);
      break;

    case "candidate":
      log("ICE Candidate recebido.");
      if (peer) {
        await peer.addIceCandidate(msg.payload);
      }
      break;
  }
});

function sendToSignaling(msg: any) {
  socket.send(JSON.stringify({ ...msg, from: localId }));
}

function connectToHostFromQr(scannedId: string) {
  remoteId = scannedId;
  peer = new PeerConnectionManager(sendToSignaling);
  peer.setRemoteId(remoteId);

  peer.onMessage((data) => {
    log(`[P2P] Mensagem recebida do host: ${data}`);
  });

  peer.createOffer().then((offer) => {
    sendToSignaling({ type: "offer", payload: offer, to: remoteId });
  });

  readerContainer.style.display = "none";
  statusText.innerText = "Conectado ao host!";
  startButton.style.display = "block";
}

function startQrCodeScanner() {
  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      console.log("📷 QR Code lido:", decodedText);
      html5QrCode.stop().then(() => {
        readerContainer.innerHTML = "";
      });
      connectToHostFromQr(decodedText);
    },
    (error) => {
      console.warn("Erro ao escanear:", error);
    }
  );
}

function startGestureDetection() {
  const hands = new Hands({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
  });

  let lastGesture = "";

  hands.onResults((results) => {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0)
      return;

    const hand = results.multiHandLandmarks[0];

    const thumbTip = hand[4];
    const indexTip = hand[8];
    const distance = Math.abs(indexTip.x - thumbTip.x);

    const gesture = distance < 0.04 ? "closed-hand" : "open-hand";

    if (gesture !== lastGesture) {
      lastGesture = gesture;
      log(`[P2P] Mensagem recebida do host: ${gesture}`);
      peer.send({ type: "gesture", gesture });
    }
  });

  const camera = new Camera(videoEl, {
    onFrame: async () => {
      await hands.send({ image: videoEl });
    },
    width: 640,
    height: 480,
    facingMode: selectedFacingMode,
  });

  camera
    .start()
    .then(() => {
      videoEl.style.display = "block";
    })
    .catch((err) => {
      log(`Erro ao iniciar câmera:: ${err}`);
      alert("Erro ao acessar a câmera: " + err.message);
    });
}

startButton.style.display = "block";

if (isMobile()) {
  cameraSelect.style.display = "block";
}

// Botão para iniciar os gestos
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  startGestureDetection();
});

// Troca de câmera via <select>
cameraSelect.addEventListener("change", (e) => {
  const target = e.target as HTMLSelectElement;
  selectedFacingMode = target.value as "user" | "environment";
  startGestureDetection();
});
