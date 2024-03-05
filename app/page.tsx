import { Entry, EntryFieldTypes, createClient } from "contentful";
import { AboutMePreview, ActivityPreview, ContactPreview, ProjectsPreview, SkillsPreview } from "./components";
import { AboutMeData, ActivityData, ContactData, SkillsData } from "./services";
import { SelectedProjectsData } from "./services/projects";

export default async function Root() {
  const aboutMeFacade = require('./services/about-me').getAboutMeFacade();
  const activityFacade = require('./services/activity').getActivityFacade();
  const contactFacade = require('./services/contact').getContactFacade();
  const skillsFacade = require('./services/skills').getSkillsFacade();
  const projectsFacade = require('./services/projects').getProjectsFacade();

  const aboutMeData: AboutMeData = await aboutMeFacade.getAboutMeData();
  const activityData: ActivityData[] = await activityFacade.getActivityData();
  const contactData: ContactData = await contactFacade.getContactData();
  const skillsData: SkillsData = await skillsFacade.getSkillsData();
  const projectsData: SelectedProjectsData = await projectsFacade.getProjectsData();

  return (
    <>
      <AboutMePreview
        name={aboutMeData.name}
        moto={aboutMeData.moto}
        imageUrl={aboutMeData.imageUrl}
      />
      <ProjectsPreview
        data={projectsData.data}
      />
      <SkillsPreview
        softskills={skillsData.softskills}
        hardskills={skillsData.hardskills}
      />
      <ActivityPreview activityData={activityData}/>
      <ContactPreview
        linkedin={contactData.linkedin}
        github={contactData.github}
        email={contactData.email}
      />
    </>
  );
}
