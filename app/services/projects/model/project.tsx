import { Document } from "@contentful/rich-text-types";
import { ColleagueData } from "./colleague";
import { TechnologyData } from "../../core";

export interface ProjectData {
  title: string;
  description: Document;
  link: string | null;
  slug: string;
  client: string;
  type: string;
  technologies: TechnologyData[];
  colleagues: ColleagueData[] | null;
  imageUrl: string | null;
  projectStart: string;
  projectEnd: string;
};
