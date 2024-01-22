import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class AppComponent implements OnInit {
  title = 'Dating App';
   
  constructor( private accountService : AccountService)  {}//fetch data from api 
  // implements OnInit for additional initialization event 
  ngOnInit(): void { // request to api 
    
     this.setCurrentUser();
  }
  
   setCurrentUser(){
     const userString =(localStorage.getItem('user'));
     if(!userString) return;
     const user : User = JSON.parse(userString);
     this.accountService.setCurrentUser(user);
   }

  

  
}
