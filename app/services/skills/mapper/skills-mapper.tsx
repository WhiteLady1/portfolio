import { Entry } from "contentful";
import { SkillsSkeleton, SoftskillsSkeleton } from "../contenful-skills-model";
import { SkillsData } from "../model";
import { TechnologyMapper, TechnologySkeleton } from "../../core";
import { SoftskillMapper } from ".";

export class SkillsMapper {
  public static map = (data: Entry<SkillsSkeleton, undefined, string>): SkillsData => ({
    softskills: (data.fields.softskills as Entry<SoftskillsSkeleton, undefined, string>[]).map(SoftskillMapper.map),
    hardskills: (data.fields.hardskills as Entry<TechnologySkeleton, undefined,string>[]).map(TechnologyMapper.map)
  });
};
