import amqplib, { Channel, ChannelModel } from "amqplib";
import { RABBITMQ_URL } from "./env";

let connection: ChannelModel;
let channel: Channel;

export async function getRabbitMQChannel(): Promise<Channel> {
  if (!channel) {
    connection = await amqplib.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
  }
  return channel;
}
