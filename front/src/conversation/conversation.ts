import { Component, inject } from '@angular/core';
import { Message, MessageModel } from '../message/message'; 
import { ApiService } from '../api/api.service';
import { AsyncPipe } from '@angular/common';
import { exhaustMap, Observable, Subject,startWith, switchMap } from 'rxjs';


@Component({
  selector: 'conversation',
  templateUrl: './conversation.html',
  imports: [Message, AsyncPipe]
})
export class Conversation {
  apiService = inject(ApiService);
  reloadMessages$ = new Subject<void>()
  messages$: Observable<MessageModel[]> = this.reloadMessages$.pipe(
    startWith(void 0),
    switchMap(
      
      () => this.apiService.getConversation()
    )
  )

  reloadMessages()
  {
    this.reloadMessages$.next();
  }

    constructor()
    {
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 30)
    }
}

