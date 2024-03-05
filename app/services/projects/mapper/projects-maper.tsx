import { Entry } from "contentful";
import { ProjectSkeleton, SelectedProjectsSkeleton } from "../contentful-mode";
import { SelectedProjectsData } from "../model";
import { ProjectMapper } from ".";

export class SelectedProjectsMapper {
  public static map = (data: Entry<SelectedProjectsSkeleton, undefined, string>): SelectedProjectsData => ({
    data: (data.fields.project as Entry<ProjectSkeleton, undefined, string>[]).map(ProjectMapper.map),
  });
};
