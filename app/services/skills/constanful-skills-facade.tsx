import { ContentfulClientApi, ChainModifiers } from "contentful";
import { SkillsFacade } from "./skills-facade";
import { SkillsData } from "./model";
import { SkillsSkeleton } from "./contenful-skills-model";
import { SkillsMapper } from "./mapper/skills-mapper";

export class ContentfulSkillsFacade implements SkillsFacade {
  constructor (
    private readonly client: ContentfulClientApi<undefined>,
  ) {}
  
  public getSkillsData = async(): Promise<SkillsData> => {
    const res = (await this.client.getEntries<SkillsSkeleton>({
      content_type: 'allSkills'
    })).items[0];

    return SkillsMapper.map(res);
  };
};
