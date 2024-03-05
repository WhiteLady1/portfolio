import { Document } from "@contentful/rich-text-types";

export interface ActivityData {
  name: string;
  description: Document;
  link: string;
  imageUrl: string;
  organization: string;
};
