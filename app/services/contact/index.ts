import { getDeliveryClient } from '../core';
import { ContactFacade } from './contact-facade';
import { ContentfulContactFacade } from './contentful-contact-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getContactFacade = (): ContactFacade => {
  const client = getDeliveryClient();
  return new ContentfulContactFacade(client);
};
