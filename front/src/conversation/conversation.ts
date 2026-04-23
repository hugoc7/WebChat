import { Component } from '@angular/core';
import { Message, MessageModel } from '../message/message'; 


@Component({
  selector: 'conversation',
  templateUrl: './conversation.html',
  imports: [Message]
})
export class Conversation {
    messages = [new MessageModel({author: "Jean", "content": "Salut Hugo !"}), new MessageModel(), new MessageModel()]
}
