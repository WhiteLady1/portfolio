import { getDeliveryClient } from '../core';
import { ContentfulProjectsFacade } from './contenful-projects-facade';
import { SelectedProjectsFacade } from './projects-facade';

export * from './contentful-mode';
export * from './mapper';
export * from './model';

export const getProjectsFacade = (): SelectedProjectsFacade => {
  const client = getDeliveryClient();
  return new ContentfulProjectsFacade(client);
};
