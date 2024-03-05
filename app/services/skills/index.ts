import { getDeliveryClient } from '../core';
import { ContentfulSkillsFacade } from './constanful-skills-facade';
import { SkillsFacade } from './skills-facade';

export * from './contenful-skills-model';
export * from './mapper';
export * from './model';

export const getSkillsFacade = (): SkillsFacade => {
  const client = getDeliveryClient();
  return new ContentfulSkillsFacade(client);
};