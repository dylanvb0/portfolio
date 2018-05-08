import { Component, OnInit, Input } from '@angular/core';
import { ListDashboardBody } from '../ListDashboardBody';
import { TextItem } from '../TextItem';

@Component({
  selector: 'app-dashboard-list-body-form',
  templateUrl: './dashboard-list-body-form.component.html',
  styleUrls: ['./dashboard-list-body-form.component.scss']
})
export class DashboardListBodyFormComponent implements OnInit {

  @Input() body : ListDashboardBody;

  constructor() { }

  ngOnInit() {
  }

  private removeItem(i : number) {
    this.body.list_items.splice(i,1);
  }

  addItem() {
    if(typeof this.body.list_items == 'undefined') this.body.list_items = [];
    this.body.list_items.push(new TextItem(""));
  }

}
