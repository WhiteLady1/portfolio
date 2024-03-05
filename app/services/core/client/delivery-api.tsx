import { ChainModifiers, ContentfulClientApi, createClient } from "contentful";

// singleton pattern
let client: ContentfulClientApi<undefined> | null = null;

export const getDeliveryClient = (): ContentfulClientApi<undefined> => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
    })
  }
  
  return client;
};
