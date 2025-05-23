import { Injectable, signal } from '@angular/core';
import { Message } from '../types/message';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = signal<Message[]>([]);

  constructor(
    private languageService: LanguageService
  ) {}

  addMessage(message: string, self = true) {
    const newMessage: Message = {
      id: (this.messages().length + 1).toString(),
      text: message,
      self
    };
    this.messages.update(messages => [...messages, newMessage]);
  }
}
