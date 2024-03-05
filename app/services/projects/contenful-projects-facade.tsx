import { ContentfulClientApi } from "contentful";
import { SelectedProjectsFacade } from "./projects-facade";
import { SelectedProjectsData } from "./model";
import { SelectedProjectsSkeleton } from "./contentful-mode";
import { SelectedProjectsMapper } from "./mapper";

export class ContentfulProjectsFacade implements SelectedProjectsFacade {
  constructor (
    private readonly client: ContentfulClientApi<undefined>,
  ) {}

  public getProjectsData = async(): Promise<SelectedProjectsData> => {
    const res = (await this.client.getEntries<SelectedProjectsSkeleton>({
      content_type: 'selectedProjects',
      include: 3,
    })).items[0];

    return SelectedProjectsMapper.map(res); 
  };
};
