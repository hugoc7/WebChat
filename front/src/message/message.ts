import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

export class MessageModel {

    author = "Hugo";
    date = Date.now();
    content = "Salut à tous !";
    id = 0;

    constructor(options?: Partial<MessageModel>) {
        Object.assign(this, options);
    }
};


@Component({
  selector: 'message',
  templateUrl: './message.html',
  imports: [DatePipe]
})
export class Message {
    author = input<string>("Hugo");

    date = input<number>(Date.now());

    content = input<string>("Salut à tous !");

    id = input<number>(0);
}


