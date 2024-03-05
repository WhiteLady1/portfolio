import { ContactData } from "./model";

export interface ContactFacade {
  getContactData: () => Promise<ContactData>;
};
