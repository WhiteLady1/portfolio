import { Entry, EntryFieldTypes } from "contentful";

export interface AboutMeEntry {
  name: EntryFieldTypes.Text;
  motto: EntryFieldTypes.Text;
  description: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
}

export interface AboutMeDataSkeleton {
  contentTypeId: 'aboutMe';
  fields: AboutMeEntry;
}

export interface ContenfulAboutMeDataEntry extends Entry<AboutMeDataSkeleton> {};
