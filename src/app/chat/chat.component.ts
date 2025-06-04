import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { MessageInputComponent } from '../message-input/message-input.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { Message } from '../models/message.model';
import { Store } from '@ngrx/store';
import { addMessage } from '../store/actions/chat.actions';
import { Chat } from '../models/chat.model';
import { messagesSelector } from '../store/features/chat.feature';

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
    private store: Store<{ chat: Chat }>
  ) {
    this.messages = this.store.selectSignal(messagesSelector);
  }

  addMessage(message: string) {
    this.store.dispatch(addMessage({ message }));
  }
}
