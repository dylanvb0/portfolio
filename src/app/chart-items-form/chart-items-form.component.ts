import { Component, OnInit, Input } from '@angular/core';
import { ChartItem } from '../ChartItem';

@Component({
  selector: 'app-chart-items-form',
  templateUrl: './chart-items-form.component.html',
  styleUrls: ['./chart-items-form.component.scss']
})
export class ChartItemsFormComponent implements OnInit {

  @Input() items : ChartItem[];

  constructor() { }

  ngOnInit() {
  }

}
