import { Component, OnInit, Input } from '@angular/core';
import { SimpleDashboardBody } from '../SimpleDashboardBody';

@Component({
  selector: 'app-simple-dashboard-body',
  templateUrl: './simple-dashboard-body.component.html',
  styleUrls: ['./simple-dashboard-body.component.scss']
})
export class SimpleDashboardBodyComponent implements OnInit {

  @Input() body : SimpleDashboardBody;

  constructor() { }

  ngOnInit() {
  }

}
