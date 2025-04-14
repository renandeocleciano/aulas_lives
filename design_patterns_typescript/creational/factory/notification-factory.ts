import { EmailNotification } from "./email-notification";
import { Notification } from "./notification.interface";
import { PushNotification } from "./push-notification";
import { SMSNotification } from "./sms-notification";

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
