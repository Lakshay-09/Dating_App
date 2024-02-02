import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})


export class MessageService{

   private messageSubject = new Subject<string>();

   message$ = this.messageSubject.asObservable();

   updateMessage(message : string) : void {
     this.messageSubject.next(message);
   }
}