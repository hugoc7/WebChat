import {Component, inject, output} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ApiService } from '../api/api.service';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
  imports: [ReactiveFormsModule],
})
export class ChatInput {
  nextMsgId = 3;
  apiService = inject(ApiService)
  formBuilder = inject(FormBuilder)
  messageSent = output<void>()

  sendMessageForm = this.formBuilder.group({
    username: ['Pierre', Validators.required],
    message: ['', Validators.required]
  })
  

  onSend()
  {
    if(!this.sendMessageForm.valid)
      return;

     console.log("Message envoyé:", this.sendMessageForm.value)
    
    this.apiService.sendMessage({
        author: this.sendMessageForm.value.username ?? "",
        content: this.sendMessageForm.value.message ?? "",
        id: this.nextMsgId,
        date: Date.now()
    }).subscribe();

    this.messageSent.emit() 
    this.nextMsgId += 1
  }
}
