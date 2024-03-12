import { Entry, EntryFieldTypes, createClient } from "contentful";
import { AboutMePreview, ActivityPreview, ContactPreview, ExperiencePreview, ProjectsPreview, SkillsPreview } from "./components";
import { AboutMeData, ActivityData, ContactData, SkillsData } from "./services";
import { SelectedProjectsData } from "./services/projects";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
      <span className="hidden sm:block sm:row-start-1 sm:row-end-3">
        <ExperiencePreview countOfProject={projectsData.data.length} />
      </span>
      <span className="hidden sm:flex sm:col-span-3 sm:row-start-6 sm:row-end-10">
        <Card className="p-2 text-[--text-experience]">
          <CardBody>
            <ScrollShadow size={100} hideScrollBar className="pb-10">
              <h3 className="text-xl pb-3">About me</h3>
              {aboutMeData.description && (
                <div className="text-sm">{documentToReactComponents(aboutMeData.description)}</div>
                )
              }
            </ScrollShadow>
          </CardBody>
        </Card>
      </span>
    </>
  );
}
