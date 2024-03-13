import { Asset, Entry } from "contentful";
import { ColleagueSkeleton, ProjectSkeleton } from "../contentful-mode";
import { ProjectData } from "../model";
import { TechnologyMapper, TechnologySkeleton } from "../../core";
import { ColleagueMapper } from ".";

export class ProjectMapper {
  public static map = (data: Entry<ProjectSkeleton, undefined, string>): ProjectData => ({
    title: data.fields.title,
    description: data.fields.description,
    slug: data.fields.slug,
    link: data.fields.link || null,
    client: data.fields.client,
    type: data.fields.type,
    imageUrl: (data.fields.image ? `https:${(data.fields.image as Asset).fields.file?.url}`: null),
    technologies: (data.fields.technologies as Entry<TechnologySkeleton, undefined, string>[]).map(TechnologyMapper.map),
    colleagues: data.fields.colleagues ? (data.fields.colleagues as Entry<ColleagueSkeleton, undefined, string>[]).map(ColleagueMapper.map) : null,
    projectStart: data.fields.projectStart,
    projectEnd: data.fields.projectEnd
  });
};
