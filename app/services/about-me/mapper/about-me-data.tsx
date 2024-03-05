import { Asset, Entry } from "contentful";
import { AboutMeDataSkeleton } from "../contentful-model";
import { AboutMeData } from "../model";

export class AboutMeMapper {
  public static map = (data: Entry<AboutMeDataSkeleton, undefined, string>): AboutMeData => ({
    name: data.fields.name,
    moto: data.fields.motto,
    description: data.fields.description,
    imageUrl: `https:${(data.fields.image as Asset).fields.file?.url}`,
  });
};
