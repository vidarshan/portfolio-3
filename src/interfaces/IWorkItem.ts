export interface IDetail {
  id: number;
  name: string;
  color: string;
}

export interface IWorkItem {
  index: string;
  icon: JSX.Element;
  title: string;
  contribution: string;
  company: string;
  date: string;
  link: string;
  details: string[];
  competencies: any[];
}
