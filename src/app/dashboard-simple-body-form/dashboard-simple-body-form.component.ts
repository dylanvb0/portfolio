import { Component, OnInit, Input } from '@angular/core';
import { SimpleDashboardBody } from '../SimpleDashboardBody';

@Component({
  selector: 'app-dashboard-simple-body-form',
  templateUrl: './dashboard-simple-body-form.component.html',
  styleUrls: ['./dashboard-simple-body-form.component.scss']
})
export class DashboardSimpleBodyFormComponent implements OnInit {

  @Input() body : SimpleDashboardBody;

  constructor() { }

  ngOnInit() {
  }

}
