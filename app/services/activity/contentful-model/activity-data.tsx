import { Entry, EntryFieldTypes } from "contentful";

export interface ActivityEntry {
  name: EntryFieldTypes.Text;
  description: EntryFieldTypes.RichText;
  link: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  organization: EntryFieldTypes.Text;
}

export interface ActivitySkeleton {
  contentTypeId: 'activity';
  fields: ActivityEntry;
};

export interface ContenfulActivityDataEntry extends Entry<ActivitySkeleton> {};
