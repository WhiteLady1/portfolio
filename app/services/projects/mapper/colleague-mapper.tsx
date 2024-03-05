import { Entry } from "contentful";
import { ColleagueSkeleton } from "../contentful-mode";
import { ColleagueData } from "../model";

export class ColleagueMapper {
  public static map = (data: Entry<ColleagueSkeleton, undefined, string>): ColleagueData => ({
    name: data.fields.name,
  });
};
