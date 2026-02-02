import { Techno } from "./techno.model";

export interface ProjectRaw {
  title: string;
  desc: string;
  githubUrl?: string;
  siteUrl?: string;
  image: string;
  technos: string[];
}

export interface Project {
  title: string;
  desc: string;
  githubUrl?: string;
  siteUrl?: string;
  image: string;
  technos?: Techno[];
}