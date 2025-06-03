export type MessageType = 'self' | 'response' | 'error';

export interface Message {
  id: string;
  text: string;
  type: MessageType;
  language?: string;
}