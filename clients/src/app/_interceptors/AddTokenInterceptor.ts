import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
 
@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
 
  constructor(private http: HttpClient){
   
  }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddTokenInterceptor - ${req.url}`);
   
    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${localStorage.getItem("token")}`
      }
    });
   
    return next.handle(jsonReq);
  }
 
}
 