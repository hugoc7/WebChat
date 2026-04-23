import { Component, signal } from '@angular/core';
import { Conversation } from '../conversation/conversation';

@Component({
  selector: 'app-root',
  imports: [Conversation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front');
}
