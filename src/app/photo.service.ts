import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoService {

  private website = 'https://dylanvb.me/api/';
  private method = '/photos';


  constructor(
    private http: HttpClient,
    private client: ClientService
  ) { }

  uploadPhoto(photo, ns?) : Observable<string>{
    if(!ns) return this.client.getNamespace(res => this.uploadPhoto(photo, res));
    console.log(photo);
    let formData = new FormData();
    formData.append('upload', photo);
    console.log(formData);
    var req = this.http.post(this.website + ns + this.method, formData)
      .map(res => {
        return "uploaded";
      });
    console.log(req);
    return req;
  }

  getPhotos(ns?) : Observable<string[]>{
    if(!ns) return this.client.getNamespace(res => this.getPhotos(res));
    return this.http.get(this.website + ns + this.method)
      .map((data : any) => <string[]>data);
  }

  deletePhoto(photo, ns?) : Observable<number>{
    if(!ns) return this.client.getNamespace(res => this.deletePhoto(res));
    return this.http.delete(this.website + ns + this.method + '/' + photo)
      .map(res => {
        return 0;
      })
  }

}
