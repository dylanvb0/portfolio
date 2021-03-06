import { HiddenSection } from './HiddenSection';

export class Project {
  id: number;
  name: string;
  description: string;
  marketing_url: string;
  technologies: string;
  season: string;
  year: number;
  pictures: string[];
  demo_link: string;
  hidden_sections: HiddenSection[];
  sort_order: number;
}
