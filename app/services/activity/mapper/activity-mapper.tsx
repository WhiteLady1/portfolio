import { Asset, Entry } from "contentful";
import { ActivitySkeleton } from "../contentful-model";
import { ActivityData } from "../model";

export class ActivityMapper {
  public static map = (data: Entry<ActivitySkeleton, undefined, string>[]): ActivityData[] => (
    data.map( item => ({
    name: item.fields.name,
    description: item.fields.description,
    link: item.fields.link,
    imageUrl: `https:${(item.fields.image as Asset).fields.file?.url}`,
    organization: item.fields.organization,
  })));
};
