import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent implements OnInit {
  title = 'Dating App';
  users : any ;
  constructor(private http:HttpClient) {}//fetch data from api 
  // implements OnInit for additional initialization event 
  ngOnInit(): void { // request to api 
     this.http.get('https://localhost:5001/api/users').subscribe({
         next: response => this.users=response,
         error : error => console.log(Error),
         complete : () => console.log("Request Completed")// what we want to do next with the data 
     })// address of our api 
     // return the observable or stream of data 
    // subscribe to the request
  }



  
}
