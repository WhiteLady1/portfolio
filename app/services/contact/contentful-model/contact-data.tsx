import { EntryFieldTypes } from "contentful";

export interface ContactEntry{
  linkedin: EntryFieldTypes.Text;
  github: EntryFieldTypes.Text;
  email: EntryFieldTypes.Text;
};

export interface ContactSkeleton {
  contentTypeId: 'contact';
  fields: ContactEntry;
};
