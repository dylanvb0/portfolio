import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DashboardItem } from './DashboardItem';
import { ClientService } from './client.service';
import { AlertMessageService } from './alert-message.service';

@Injectable()
export class DashboardService {

  private website = 'https://dylanvb.me/api/';
  private method = '/dashboardItems';
  public dashboardItems : DashboardItem[];
  public finishedTyping = false;

  constructor(
    private http: HttpClient,
    private client : ClientService,
    private messageService : AlertMessageService
  ) { }

  getDashboardItems(ns?) : Observable<void> {
    if(!ns) {
      this.client.getNamespace(res => this.getDashboardItems(res)).subscribe();
      return;
    }
    console.log("getting dashboard items");
    console.log("Dashboard Ns:" + ns);
    this.http.get(this.website + ns + this.method)
      .map((data : any) => {
        return data.map(obj => {
          return new DashboardItem(obj);
        });
      }).subscribe(items => {
        this.dashboardItems = items;
        this.sortDashboardItems();
      });
  }


  saveDashboardItem(item_arg, ns?): Observable<number> {
    if(!ns) return this.client.getNamespace(res => this.saveDashboardItem(item_arg, res));
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
      this.website + ns + this.method,
      JSON.stringify(item),
      httpOptions
    ).map((data : number) => {
      if(data > -1){
        this.messageService.show("success");
      }
      return data;
    });
  }

  deleteDashboardItem(item, ns?): Observable<Object> {
    if(!ns) return this.client.getNamespace(res => this.deleteDashboardItem(item, res));
    return this.http.delete(this.website + ns + this.method + "/" + item.id);
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
