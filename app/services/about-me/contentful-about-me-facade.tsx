import { ChainModifiers, ContentfulClientApi } from "contentful";
import { AboutMeDataSkeleton } from "./contentful-model";
import { AboutMeData, AboutMeMapper } from ".";
import { AboutMeFacade } from "./about-me-facade";

export class ContentfulAboutMeFacade implements AboutMeFacade {
  constructor (
    private readonly client: ContentfulClientApi<undefined>,
  ) {}

  public getAboutMeData = async(): Promise<AboutMeData> => {
    const res = (await this.client.getEntries<AboutMeDataSkeleton>({
      content_type: 'aboutMe'
    })).items[0];
    return AboutMeMapper.map(res);
  };
};
