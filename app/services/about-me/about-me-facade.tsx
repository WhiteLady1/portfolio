import { AboutMeData } from "./model";

export interface AboutMeFacade {
  getAboutMeData: () => Promise<AboutMeData>;
};
