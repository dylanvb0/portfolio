import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DashboardItem } from './DashboardItem';
import { ClientService } from './client.service';

@Injectable()
export class DashboardService {

  private website = 'https://dylanvb.me/api/';
  private method = '/dashboardItems';
  public dashboardItems : DashboardItem[];

  constructor(
    private http: HttpClient,
    private client : ClientService
  ) { }

  getDashboardItems() : void {
    this.http.get(this.website + this.client.getNamespace() + this.method)
      .map((data : any) => {
        return data.map(obj => {
          return new DashboardItem(obj);
        });
      }).subscribe(items => {
        this.dashboardItems = items;
        this.sortDashboardItems();
      });
  }

  saveDashboardItem(item_arg): Observable<number> {
    var item = (JSON.parse(JSON.stringify(item_arg)));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(JSON.stringify(item));
    // convert TextItem[] back into string[] before saving
    if(typeof item.body.x_labels !== 'undefined'){
      item.body.x_labels = item.body.x_labels.map(label => label.text);
    }
    if(typeof item.body.list_items !== 'undefined'){
      item.body.list_items = item.body.list_items.map(item => item.text);
    }
    console.log(JSON.stringify(item));
    return this.http.post(
      this.website + this.client.getNamespace() + this.method,
      JSON.stringify(item),
      httpOptions
    ).map((data : number) => data);
  }

  deleteDashboardItem(item): Observable<Object> {
    return this.http.delete(this.website + this.client.getNamespace() + this.method + "/" + item.id);
  }

  sortDashboardItems() {
    console.log("sorting");
    this.dashboardItems.sort( (a,b) => {
      if (a.sort_order > b.sort_order)
        return 1;
      else if(a.sort_order < b.sort_order)
        return -1;
      else return 0;
    })
  }


}
