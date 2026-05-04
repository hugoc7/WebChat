import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageModel } from '../message/message';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getConversation(): Observable<MessageModel[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversation`).pipe(
      map(messages => messages.map(m => new MessageModel({
        id: m.id,
        author: m.author,
        content: m.content,
        date: m.date ? new Date(m.date).getTime() : Date.now()
      })))
    );
  }
  sendMessage(message: MessageModel): Observable<MessageModel> {
    const dto = { Author: message.author, Content: message.content, Date: new Date(message.date).toISOString(), Id: message.id };
    return this.http.post<any>(`${this.baseUrl}/conversation`, dto).pipe(
      map(m => new MessageModel({ id: m.id, author: m.author, content: m.content, date: m.date ? new Date(m.date).getTime() : Date.now() }))
    );
  }
}
