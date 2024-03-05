import { EntryFieldTypes } from "contentful";
import { TechnologyEntry } from "../../core";

export interface SoftskillEntry {
  name: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
}

export interface SoftskillsSkeleton {
  contentTypeId: 'softskills';
  fields: SoftskillEntry;
};

export interface HardskillsSkeleton {
  contentTypeId: 'hardskills';
  fields: TechnologyEntry;
};

export interface SkillsSkeleton {
  contentTypeId: 'allSkills';
  fields: {
    softskills: SoftskillsSkeleton[];
    hardskills: HardskillsSkeleton[];
  }
};
