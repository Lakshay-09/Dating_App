import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../_services/subject.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @ViewChild('editForm') editForm : NgForm | undefined ; 
  message: any;
  
  constructor(private messageService : MessageService) {};
  
  ngOnInit() : void {

    this.messageService.message$.subscribe((newMessage) => {
         this.message = newMessage ; 
    })
  }
  
    
  
  updateMessage(){
    console.log(this.message);
  
  }
  
 
}
