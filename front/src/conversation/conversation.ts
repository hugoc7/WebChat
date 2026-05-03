import { Component, inject } from '@angular/core';
import { Message, MessageModel } from '../message/message'; 
import { ApiService } from '../api/api.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'conversation',
  templateUrl: './conversation.html',
  imports: [Message, AsyncPipe]
})
export class Conversation {
  apiService = inject(ApiService);
  messages$: Observable<MessageModel[]> = this.apiService.getConversation$();

    constructor()
    {
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 30)
      //this.messages[0].date = yesterday.getTime();
    }
    //messages = [new MessageModel({author: "Jean", "content": "Salut Hugo !"}), new MessageModel(), new MessageModel()]
}
