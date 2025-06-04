import { Message } from "./message.model";

export interface Chat {
  loading: boolean;
  messages: Message[];
}