import { ContentfulClientApi } from "contentful";
import { ActivityFacade } from "./activity-facade";
import { ActivityData } from "./model";
import { ActivitySkeleton } from "./contentful-model";
import { ActivityMapper } from "./mapper";

export class ContentfulActivityFacade implements ActivityFacade {
  constructor (
    private readonly client: ContentfulClientApi<undefined>,
  ) {}

  public getActivityData = async(): Promise<ActivityData[]> => {
    const res = (await this.client.getEntries<ActivitySkeleton>({
      content_type: 'activity'
    })).items;
    return ActivityMapper.map(res);
  };
};