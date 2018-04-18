import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Admin } from './admin';

@Injectable()
export class AdminService {

  private website = 'http://dylanvb.me/api/admins';

  constructor(
    private route : Router,
    private http : HttpClient
  ) { }

  authenticateAdmin(email:string, password:string): Observable<Admin> {
    return this.http.get(this.website + '/' + btoa(email) + '/' + btoa(password))
      .map((data : Admin) => data);
  }
}
