import { NotificationFactory } from "./notification-factory";

const email = NotificationFactory.createNotification("email");
const sms = NotificationFactory.createNotification("sms");
const push = NotificationFactory.createNotification("push");

email.send("Bem-vindo ao sistema!");
sms.send("Seu código é 123456");
push.send("Você recebeu uma nova mensagem.");
