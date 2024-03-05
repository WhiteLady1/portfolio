import { EntryFieldTypes } from "contentful";

export interface ColleagueEntry {
  name: EntryFieldTypes.Text;
};

export interface ColleagueSkeleton {
  contentTypeId: 'colleague';
  fields: ColleagueEntry;
};
