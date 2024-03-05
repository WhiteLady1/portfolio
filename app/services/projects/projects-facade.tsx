import { SelectedProjectsData } from "./model";

export interface SelectedProjectsFacade {
  getProjectsData: () => Promise<SelectedProjectsData>;
};
