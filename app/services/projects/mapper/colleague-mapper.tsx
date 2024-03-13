import { Asset, Entry } from "contentful";
import { ColleagueSkeleton } from "../contentful-mode";
import { ColleagueData } from "../model";

export class ColleagueMapper {
  public static map = (data: Entry<ColleagueSkeleton, undefined, string>): ColleagueData => ({
    name: data.fields.name,
    linkedin: data.fields.linkedin || null,
    imageUrl: data.fields.image? `https:${(data.fields.image as Asset).fields.file?.url}` : null,
  });
};
