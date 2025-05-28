import { Message } from "./message.model";

export interface Chat {
  loading: boolean;
  error: string | null;
  messages: Message[];
}