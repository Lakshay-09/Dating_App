import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { MessageService } from './_services/subject.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class AppComponent implements OnInit {
  title = 'Dating App';
   
  constructor( private accountService : AccountService, private messageService : MessageService)  {};//fetch data from api 
  // implements OnInit for additional initialization event 



  ngOnInit(): void { // request to api 
    
     this.setCurrentUser();
  }
  sendMessage() : void {
    this.messageService.updateMessage("Helloo ")
   }
   setCurrentUser(){
     const userString =(localStorage.getItem('user'));
     if(!userString) return;
     const user : User = JSON.parse(userString);
     this.accountService.setCurrentUser(user);
   }

  

  
}
