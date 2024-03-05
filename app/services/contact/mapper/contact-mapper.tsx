import { Entry } from "contentful";
import { ContactSkeleton } from "../contentful-model";
import { ContactData } from "../model";

export class ContactMapper {
  public static map = (data: Entry<ContactSkeleton, undefined, string>): ContactData => ({
    linkedin: data.fields.linkedin,
    github: data.fields.github,
    email: data.fields.email,
  });
};
