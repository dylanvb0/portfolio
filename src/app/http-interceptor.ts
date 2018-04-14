import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/finally'
import 'rxjs/add/observable/throw';
import { AlertMessageService } from './alert-message.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private alertMsg : AlertMessageService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    var expiration = sessionStorage.getItem('token_expiration');
    if(expiration != null && new Date(expiration) > new Date()){
      const authHeader = 'Bearer ' + sessionStorage.getItem('session_token');
      var req = req.clone({headers: req.headers.set('Authorization', authHeader)});
    }
    return next.handle(req).catch((err: any) => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.alertMsg.show("unauthorized");
        }else if(err.status === 500){
          this.alertMsg.show("error");
        }
        return next.handle(req);
      }
    });
  }
}
