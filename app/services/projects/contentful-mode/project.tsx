import { EntryFieldTypes } from "contentful";
import { TechnologySkeleton } from "../../core";
import { ColleagueSkeleton } from "./colleague";

export interface ProjectEntry {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.RichText;
  link?: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  client: EntryFieldTypes.Text;
  type: EntryFieldTypes.Text;
  technologies: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechnologySkeleton>>;
  colleagues?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ColleagueSkeleton>>;
  image?: EntryFieldTypes.AssetLink;
  projectStart: EntryFieldTypes.Text;
  projectEnd: EntryFieldTypes.Text;
};

export interface ProjectSkeleton {
  contentTypeId: 'project';
  fields: ProjectEntry;
};
