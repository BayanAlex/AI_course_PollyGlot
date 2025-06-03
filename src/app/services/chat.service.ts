import { Injectable } from '@angular/core';
import { IChatService } from '../models/chat.sevice.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from '../models/server-response.model';
import { API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements IChatService {

  constructor(
    private http: HttpClient
  ) {}

  sendMessage(message: string, language: string): Observable<string> {
    return this.http
      .post<ServerResponse>(API_URL,
        JSON.stringify({ message, language }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        map(response => response.translation),
        catchError(response => throwError(() => response.error.message))
      );
  }
}
