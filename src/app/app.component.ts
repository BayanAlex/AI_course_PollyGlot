import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'PollyGlot';
}
