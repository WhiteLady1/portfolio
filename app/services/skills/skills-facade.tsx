import { SkillsData } from "./model";

export interface SkillsFacade {
  getSkillsData: () => Promise<SkillsData>;
};
