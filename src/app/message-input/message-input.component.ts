import { ChangeDetectionStrategy, Component, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  sendMessage() {
    const message = this.message().trim();
    if (!message)
      return;
    this.message.set('');
    this.messageSent.emit(message);
  }
}
