import { Observable } from "rxjs";

export interface IChatService {
  sendMessage(message: string, language: string): Observable<string>;
}