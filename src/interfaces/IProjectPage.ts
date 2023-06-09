import { IDetail } from "./IWorkItem";

export interface IProjectPage {
  id: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
  tags: string;
  technologies: IDetail[];
}
