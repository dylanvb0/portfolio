import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Injectable()
export class AdminSessionService {

  private admin : Admin = null;

  private website = 'https://dylanvb.me/api/';
  private method = '/admins';

  constructor(
    private adminService : AdminService,
    private datePipe : DatePipe
  ) {
    var expiration = sessionStorage.getItem('admin_token_expiration');
    if(expiration != null && new Date(expiration) > new Date()){
      this.admin = JSON.parse(atob(sessionStorage.getItem('admin')));
    }
  }

   logIn(email : string, password : string) : Observable<boolean>{
     return this.adminService.authenticateAdmin(email, password)
      .map((data : Admin) => {
        this.admin = data;
        sessionStorage.setItem('admin_session_token', data.session_token);
        sessionStorage.setItem('admin_token_expiration', this.datePipe.transform(data.token_expiration, 'yyyy-MM-dd HH:mm:ss'));
        sessionStorage.setItem('admin', btoa(JSON.stringify(data)));
        return data != null;
      })
   }

   isLoggedIn(){
     return !!this.admin;
   }

   logOut(){
     sessionStorage.removeItem('admin_session_token');
     sessionStorage.removeItem('admin_token_expiration');
     sessionStorage.removeItem('admin');
     this.admin = null;
   }

   getAdmin(){
     return this.admin;
   }
}
