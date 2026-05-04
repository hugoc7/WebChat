import { Component, signal } from '@angular/core';
import { Conversation } from '../conversation/conversation';
import { ChatInput } from "../chat-input/chat-input";

@Component({
  selector: 'app-root',
  imports: [Conversation, ChatInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front');
}
