import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { User } from '../_models/user';
import { NonNullAssert } from '@angular/compiler';

@Injectable({ // decorator 
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private  currentUserSource = new BehaviorSubject<User | null >(null);// union type 
  currentUser$ = this.currentUserSource.asObservable();
  static currentUser$: any;
  // dollar is used to specify that it is a observable 
  constructor(private http:HttpClient) { }
  
  login(model : any){
    return this.http.post<User>(this.baseUrl + 'account/login',model).pipe(
          map((response : User) => {
             
             const user = response;
             if(user){
              localStorage.setItem('user',JSON.stringify(user))
              this.setCurrentUser(user);
              this.currentUserSource.next(user);
             }
          })
    )
    }
    register(model : any){
       return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
          map(user => {
              if(user){
                localStorage.setItem('user',JSON.stringify(user));
                this.currentUserSource.next(user);
              }
              
          })
       )
    }
    setCurrentUser(user : User){
      user.role = [];
      const roles = this.getDecodedToken(user.token).role;
      Array.isArray(roles) ? user.role = roles : user.role.push(roles);
     
      this.currentUserSource.next(user);
    }
    logout(){
      localStorage.removeItem('user');
     this.currentUserSource.next(null);

    }
    getDecodedToken(token : string){
       return JSON.parse(atob(token.split('.')[1]));
    }
    

  }

