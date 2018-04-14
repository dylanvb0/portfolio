import { DashboardBody } from './DashboardBody';
import { SimpleDashboardBody } from './SimpleDashboardBody';
import { ListDashboardBody } from './ListDashboardBody';
import { HorizontalBarChartDashboardBody } from './HorizontalBarChartDashboardBody';

export class DashboardItem {
  id: number;
  header_text: string;
  type: string;
  sort_order: number;
  body: DashboardBody;


  constructor(obj : any){
    this.id = obj.id;
    this.header_text = obj.header_text;
    this.type = obj.type;
    this.sort_order = obj.sort_order;
    switch(this.type){
      case "simple":
        this.body = <SimpleDashboardBody>obj.body;
        break;
      case "list":
        this.body = new ListDashboardBody(obj.body);
        break;
      case "horizontal_bar":
        this.body = new HorizontalBarChartDashboardBody(obj.body);
        break;
      default:
        this.body = null;
        break;
    }
  }
}
