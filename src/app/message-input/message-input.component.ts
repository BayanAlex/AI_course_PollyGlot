import { ChangeDetectionStrategy, Component, model, output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Chat } from '../models/chat.model';
import { environment } from '../../environments/environment';
import { chatLoadingSelector } from '../store/features/chat.feature';

@Component({
  selector: 'app-message-input',
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
  host: {
    '[class.focused]': 'this.focused()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageInputComponent {
  message = model('');
  focused = signal(false);
  messageSent = output<string>();
  loading: Signal<boolean>;
  
  constructor(private store: Store<{ chat: Chat }>) {
    this.loading = this.store.selectSignal(chatLoadingSelector);
  }

  sendMessage() {
    const message = this.message().trim();
    const limit = environment.messageLengthLimit;
    if (message.length > limit) {
      alert(`Message is too long. Please limit it to ${limit} characters.`);
      return;
    }
    if (this.loading() || !message)
      return;
    this.message.set('');
    this.messageSent.emit(message);
  }
}
