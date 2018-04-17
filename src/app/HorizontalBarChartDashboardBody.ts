import { DashboardBody } from './DashboardBody';
import { ChartItem } from './ChartItem';
import { TextItem } from './TextItem';

export class HorizontalBarChartDashboardBody implements DashboardBody {
  chart_items : ChartItem[];
  min_value : number;
  max_value : number;
  x_labels : TextItem[];

  constructor(body){
    this.x_labels = new Array<TextItem>();
    if(body == null){
      this.chart_items = new Array<ChartItem>();
      return;
    }
    for(let label of body.x_labels){
      this.x_labels.push(new TextItem(label));
    }
    this.min_value = body.min_value;
    this.max_value = body.max_value;
    this.chart_items = <ChartItem[]>body.chart_items;
  }
}
