import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap, throwError } from 'rxjs';
import { IChatService } from '../models/chat.sevice.model';

@Injectable({
  providedIn: 'root'
})
export class MockChatService implements IChatService {

  constructor() { }

  sendMessage(message: string, language: string): Observable<string> {
    return of(`Mock response in ${language} for message: "${message}"`).pipe(
      delay(1000),
      switchMap(response => response.includes('test error') ? throwError(() => new Error('Mock error occurred')) : of(response)),
    );
  }
}
