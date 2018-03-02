import { DashboardBody } from './DashboardBody';
import { ChartItem } from './ChartItem';

export class HorizontalBarChartDashboardBody implements DashboardBody {
  chart_items : ChartItem[];
  min_value : number;
  max_value : number;
  x_labels : string[];
}
