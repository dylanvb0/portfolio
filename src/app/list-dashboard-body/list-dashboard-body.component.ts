import { Component, OnInit, Input } from '@angular/core';
import { ListDashboardBody } from '../ListDashboardBody';

@Component({
  selector: 'app-list-dashboard-body',
  templateUrl: './list-dashboard-body.component.html',
  styleUrls: ['./list-dashboard-body.component.scss']
})
export class ListDashboardBodyComponent implements OnInit {

  @Input() body : ListDashboardBody;

  constructor() { }

  ngOnInit() {
  }

}
