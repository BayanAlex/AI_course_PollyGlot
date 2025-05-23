import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { MessageInputComponent } from '../message-input/message-input.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { Message } from '../types/message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  imports: [MessageListComponent, MessageInputComponent, LanguageSelectorComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  messages: Signal<Message[]>;

  constructor(
    private chatService: ChatService
  ) {
    this.messages = this.chatService.messages;
  }

  addMessage(message: string) {
    this.chatService.addMessage(message);
  }
}
