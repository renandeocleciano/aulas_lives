type SignalingMessage =
  | { type: "offer"; payload: RTCSessionDescriptionInit }
  | { type: "answer"; payload: RTCSessionDescriptionInit }
  | { type: "candidate"; payload: RTCIceCandidateInit }
  | { type: "welcome"; id: string };

type SendMessage = (msg: SignalingMessage & { to?: string }) => void;

export class PeerConnectionManager {
  private peer: RTCPeerConnection;
  private dataChannel?: RTCDataChannel;
  private sendToSignaling: SendMessage;
  private remoteId = "";

  constructor(sendToSignaling: SendMessage) {
    this.sendToSignaling = sendToSignaling;

    this.peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    // Enviar candidatos ICE conforme forem descobertos
    this.peer.onicecandidate = (event) => {
      if (event.candidate) {
        this.sendToSignaling({
          type: "candidate",
          payload: event.candidate.toJSON(),
          to: this.remoteId,
        });
      }
    };

    // Quando um dataChannel é recebido
    this.peer.ondatachannel = (event) => {
      this.setupDataChannel(event.channel);
    };
  }

  setRemoteId(id: string) {
    this.remoteId = id;
  }

  // CHAMADO PELO CONTROLLER (quem inicia a conexão)
  async createOffer(): Promise<RTCSessionDescriptionInit> {
    this.dataChannel = this.peer.createDataChannel("gestures");
    this.setupDataChannel(this.dataChannel);

    const offer = await this.peer.createOffer();
    await this.peer.setLocalDescription(offer);
    return offer;
  }

  // CHAMADO PELO SCREEN (quem recebe a conexão)
  async receiveOffer(
    offer: RTCSessionDescriptionInit
  ): Promise<RTCSessionDescriptionInit> {
    await this.peer.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await this.peer.createAnswer();
    await this.peer.setLocalDescription(answer);
    return answer;
  }

  async receiveAnswer(answer: RTCSessionDescriptionInit) {
    await this.peer.setRemoteDescription(new RTCSessionDescription(answer));
  }

  async addIceCandidate(candidate: RTCIceCandidateInit) {
    await this.peer.addIceCandidate(new RTCIceCandidate(candidate));
  }

  send(data: any) {
    this.dataChannel?.send(JSON.stringify(data));
  }

  onMessage(callback: (data: any) => void) {
    this.messageCallback = callback;
  }

  private messageCallback?: (data: any) => void;

  private setupDataChannel(channel: RTCDataChannel) {
    this.dataChannel = channel;

    this.dataChannel.onopen = () => {
      console.log("[RTC] Canal de dados aberto");
    };

    this.dataChannel.onmessage = (event) => {
      if (this.messageCallback) {
        this.messageCallback(JSON.parse(event.data));
      }
    };

    this.dataChannel.onerror = (e) => {
      console.error("[RTC] Erro no canal:", e);
    };
  }
}
