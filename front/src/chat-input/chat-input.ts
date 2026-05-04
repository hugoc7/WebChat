import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ApiService } from '../api/api.service';
@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
  imports: [FormsModule],
})
export class ChatInput {
  username = 'Pierre';
  contentInput = "";
  nextMsgId = 3;
  apiService = inject(ApiService)
  onSend()
  {
    console.log("Message envoyé:", this.contentInput)
    
    this.apiService.sendMessage({
        author: this.username,
        content: this.contentInput,
        id: this.nextMsgId,
        date: Date.now()
    }).subscribe();
    this.nextMsgId += 1
  }
}
