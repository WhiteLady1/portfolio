import { Entry } from "contentful";
import { TechnologySkeleton } from "../contentful-model";
import { TechnologyData } from "../model";

export class TechnologyMapper {
  public static map = (data: Entry<TechnologySkeleton, undefined, string>): TechnologyData => ({
    name: data.fields.name
  });
};
