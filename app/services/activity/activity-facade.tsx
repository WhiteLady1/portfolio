import { ActivityData } from "./model";

export interface ActivityFacade {
  getActivityData: () => Promise<ActivityData[]>;
};
