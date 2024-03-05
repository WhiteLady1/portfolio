import { TechnologyData } from "../../core";

export interface SoftskillData {
  name: string;
  description: string;
}

export interface SkillsData {
  softskills: SoftskillData[];
  hardskills: TechnologyData[];
};
