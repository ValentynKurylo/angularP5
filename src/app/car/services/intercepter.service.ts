import { Injectable } from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{

  constructor() { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = req.clone({
        headers: new HttpHeaders(

          {

          }
        )
     })
    return next.handle(clone);
  }
}
