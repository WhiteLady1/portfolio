import { getDeliveryClient } from '../core';
import { ActivityFacade } from './activity-facade';
import { ContentfulActivityFacade } from './contenful-activity-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getActivityFacade = (): ActivityFacade => {
  const client = getDeliveryClient();
  return new ContentfulActivityFacade(client);
};
