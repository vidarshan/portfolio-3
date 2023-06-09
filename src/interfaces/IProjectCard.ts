import { IDetail } from "./IWorkItem";

export interface IProjectCard {
  id: string;
  type: "project" | "archive";
  repo: string;
  tags: string;
  name: string;
  demo: string;
  image: string;
  description: string;
  technologies: IDetail[];
}
