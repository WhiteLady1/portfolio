import { ContentfulClientApi } from "contentful";
import { ContactFacade } from "./contact-facade";
import { ContactData } from "./model";
import { ContactSkeleton } from "./contentful-model";
import { ContactMapper } from "./mapper";

export class ContentfulContactFacade implements ContactFacade {
  constructor(
    private readonly client: ContentfulClientApi<undefined>,
  ) {}

  public getContactData = async(): Promise<ContactData> => {
    const res = (await this.client.getEntries<ContactSkeleton>({
      content_type: 'contact'
    })).items[0];

    return ContactMapper.map(res);
  };
};