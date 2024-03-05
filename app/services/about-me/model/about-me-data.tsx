import { Document } from "@contentful/rich-text-types";

export interface AboutMeData {
  name: string;
  moto: string;
  description?: Document;
  imageUrl: string; 
};
