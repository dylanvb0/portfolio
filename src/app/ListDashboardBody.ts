import { DashboardBody } from './DashboardBody';
import { TextItem } from './TextItem';

export class ListDashboardBody implements DashboardBody {
  list_items : TextItem[];
  text_size : string;

  constructor(body) {
    this.list_items = new Array<TextItem>();
    for(let item of body.list_items){
      this.list_items.push(new TextItem(item));
    }
    this.text_size = body.text_size;
  }
}
