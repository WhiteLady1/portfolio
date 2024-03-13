import { EntryFieldTypes } from "contentful";

export interface ColleagueEntry {
  name: EntryFieldTypes.Text;
  linkedin: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink
};

export interface ColleagueSkeleton {
  contentTypeId: 'colleague';
  fields: ColleagueEntry;
};
