import { EntryFieldTypes } from "contentful";
import { ProjectSkeleton } from "./project";

export interface SelectedProjectsEntry {
  project: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ProjectSkeleton>>
};

export interface SelectedProjectsSkeleton {
  contentTypeId: 'selectedProjects';
  fields: SelectedProjectsEntry;
};
