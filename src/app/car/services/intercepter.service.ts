import { Injectable } from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{
  token: any
  constructor() { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token')
    this.token.toString()
    let clone = req.clone({
        headers: new HttpHeaders(

          {
                  'Authorization': this.token
          }
        )
     })
    return next.handle(clone);
  }
}
