import { Entry } from "contentful";
import { SoftskillData, SoftskillsSkeleton } from "..";

export class SoftskillMapper {
  public static map = (data: Entry<SoftskillsSkeleton, undefined, string>): SoftskillData => ({
    name: data.fields.name,
    description: data.fields.description
  });
};
