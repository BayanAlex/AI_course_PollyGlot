import { Injectable } from '@angular/core';
import { IChatService } from '../models/chat.sevice.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements IChatService {

  constructor(
  ) {}

  sendMessage(message: string, language: string): Observable<string> {
    return of('');
  }

}
