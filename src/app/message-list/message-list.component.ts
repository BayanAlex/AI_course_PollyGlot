import { ChangeDetectionStrategy, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import { Message } from '../types/message';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  imports: [MessageComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnChanges {
  messages = input<Message[]>([]);
  scrollContainer = viewChild<ElementRef>('scrollContainer');

  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      setTimeout(() => {
        const scrollContainer = this.scrollContainer()?.nativeElement;
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }
}
