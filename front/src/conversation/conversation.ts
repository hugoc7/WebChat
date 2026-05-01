import { Component } from '@angular/core';
import { Message, MessageModel } from '../message/message'; 


@Component({
  selector: 'conversation',
  templateUrl: './conversation.html',
  imports: [Message]
})
export class Conversation {
    constructor()
    {
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 30)
      this.messages[0].date = yesterday.getTime();
    }
    messages = [new MessageModel({author: "Jean", "content": "Salut Hugo !"}), new MessageModel(), new MessageModel()]
}
