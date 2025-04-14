import { Notification } from "./notification.interface";

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}
