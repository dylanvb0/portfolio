import { Component, OnInit, Input } from '@angular/core';
import { HorizontalBarChartDashboardBody } from '../HorizontalBarChartDashboardBody';

@Component({
  selector: 'app-horizontal-bar-chart-dashboard-body',
  templateUrl: './horizontal-bar-chart-dashboard-body.component.html',
  styleUrls: ['./horizontal-bar-chart-dashboard-body.component.scss']
})
export class HorizontalBarChartDashboardBodyComponent implements OnInit {

  @Input() body : HorizontalBarChartDashboardBody;
  max_width = 200;
  first_label_width = 0;

  constructor() { }

  ngOnInit() {
  }

  getBarWidth(value) {
    const width_per_point = this.max_width / (this.body.max_value - this.body.min_value)
    const num_points = value - this.body.min_value;
    return value * 10;
  }

  getLabelWidth(label){
    if(this.body.x_labels[0].text == label) {
      this.first_label_width = 8 * this.body.x_labels[0].text.length;
      return this.first_label_width;
    }
    return (this.max_width - this.first_label_width) / (this.body.x_labels.length - 1);
  }

}
