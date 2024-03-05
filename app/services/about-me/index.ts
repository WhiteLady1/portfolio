import { getDeliveryClient } from "../core";
import { AboutMeFacade } from "./about-me-facade";
import { ContentfulAboutMeFacade } from "./contentful-about-me-facade";

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getAboutMeFacade = (): AboutMeFacade => {
  const client = getDeliveryClient();
  return new ContentfulAboutMeFacade(client);
};
