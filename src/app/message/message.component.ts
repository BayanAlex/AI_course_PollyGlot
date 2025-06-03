import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Message } from '../models/message.model';
import { languages } from '../languages.config';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  message = input<Message>();
  flagPath = computed(() => {
    const language = this.message()?.language;
    return language ? languages.find(l => l.name === language)?.imageName : null;
  });
  isSelf = computed(() => this.message()?.type === 'self');
  isError = computed(() => this.message()?.type === 'error');
  isResponse = computed(() => this.message()?.type === 'response');
}
