import { Component, OnInit, Input } from '@angular/core';
import { HorizontalBarChartDashboardBody } from '../HorizontalBarChartDashboardBody';
import { TextItem } from '../TextItem';

@Component({
  selector: 'app-dashboard-horizontal-bar-chart-body-form',
  templateUrl: './dashboard-horizontal-bar-chart-body-form.component.html',
  styleUrls: ['./dashboard-horizontal-bar-chart-body-form.component.scss']
})
export class DashboardHorizontalBarChartBodyFormComponent implements OnInit {

  @Input() body : HorizontalBarChartDashboardBody;

  constructor() { }

  ngOnInit() {
  }

  private removeItem(i : number) {
    this.body.x_labels.splice(i,1);
  }

  addItem() {
    this.body.x_labels.push(new TextItem(""));
  }
}
