import { EntryFieldTypes } from "contentful";

export interface TechnologyEntry {
  name: EntryFieldTypes.Text;
};

export interface TechnologySkeleton {
  contentTypeId: 'technology';
  fields: TechnologyEntry;
};
