import { Asset, Entry, EntryFieldTypes, createClient } from "contentful";
import { AboutMePreview, ActivityData, ActivityPreview, ContactPreview, ProjectData, ProjectsPreview, SkillData, SkillsPreview } from "./components";

interface AboutMeDataSkeleton {
  contentTypeId: 'aboutMe';
  fields: {
    name: EntryFieldTypes.Text;
    motto: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
  }
}

interface SkillSkeleton {
  contentTypeId: 'softskills';
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  }
}

interface SkillsSkeleton {
  contentTypeId: 'allSkills';
  fields: {
    softskills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
    hardskills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
  }
}

export interface TechnologySkeleton {
  contentTypeId: 'technology';
  fields: {
    name: EntryFieldTypes.Text;
  }
}

export interface ColleagueSkeleton {
  contentTypeId: 'colleague';
  fields: {
    name: EntryFieldTypes.Text;
  }
}

export interface ProjectSkeleton {
  contentTypeId: 'project';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    link: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    client: EntryFieldTypes.Text;
    type: EntryFieldTypes.Text;
    technologies: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TechnologySkeleton>>;
    colleagues: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ColleagueSkeleton>>;
    image: EntryFieldTypes.AssetLink;
    projectStart: EntryFieldTypes.Text;
    projectEnd: EntryFieldTypes.Text;
  }
}

interface SelectedProjectsSkeleton {
  contentTypeId: 'selectedProjects';
  fields: {
    project: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ProjectSkeleton>>
  }
}

interface ActivitySkeleton {
  contentTypeId: 'activity';
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    link: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    organization: EntryFieldTypes.Text;
  };
};

interface ContactSkeleton {
  contentTypeId: 'contact';
  fields: {
    linkedin: EntryFieldTypes.Text;
    github: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
  }
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
})

const getAboutMeData = async() => {
  const res = await client.getEntries<AboutMeDataSkeleton>({
    content_type: 'aboutMe'
  });
  return res.items[0];
};

const getSkillsData = async() => {
  const res = await client.getEntries<SkillsSkeleton>({
    content_type: 'allSkills'
  });
  return res.items[0];
};

const getProjectsData = async() => {
  const res = await client.getEntries<SelectedProjectsSkeleton>({
    content_type: 'selectedProjects',
    include: 2
  });
  return res.items[0];
};

const getActivitiesData = async() => {
  const res = await client.getEntries<ActivitySkeleton>({
    content_type: 'activity'
  });

  return res.items;
};

const getContactData = async() => {
  const res = await client.getEntries<ContactSkeleton>({
    content_type: 'contact'
  });

  return res.items[0];
};

export default async function Root() {
  const aboutMeData = await getAboutMeData();
  const skillsData = await getSkillsData();
  const projectsData = await getProjectsData();
  const activity = await getActivitiesData();
  const contact = await getContactData();

  console.log('contact', contact);

  const AboutMeImage = aboutMeData.fields.image as Asset;
  const softskillsData = skillsData.fields.softskills as Entry<SkillSkeleton, undefined, string>[];
  const hardskillsData = skillsData.fields.hardskills as Entry<SkillSkeleton, undefined, string>[];
  const projects = projectsData.fields.project as Entry<ProjectSkeleton, undefined, string>[];

  const getSkillsObject = (data: Entry<SkillSkeleton, undefined, string>[]): SkillData[] => {
    const skills = data.map(skill => ({
      name: skill.fields.name,
      description: skill.fields.description
    }))
    return skills;
  };

  const getActivityObject = (data: Entry<ActivitySkeleton, undefined, string>[]): ActivityData[] => {
    const activity: ActivityData[] = data.map(item => {
      const imageUrl = item.fields.image as Asset;
      return ({
        name: item.fields.name,
        description: item.fields.description,
        link: item.fields.link,
        imageUrl: `https:${imageUrl?.fields.file?.url}`,
        organization: item.fields.organization
      });
    })

    return activity;
  };

  return (
    <>
      <AboutMePreview
        name={aboutMeData.fields.name}
        moto={aboutMeData.fields.motto}
        // description={aboutMeData.fields.description}
        imageUrl={`https:${AboutMeImage.fields.file?.url}`}
      />
      <ProjectsPreview
        data={projects}
      />
      <SkillsPreview
        softskills={getSkillsObject(softskillsData)}
        hardskills={getSkillsObject(hardskillsData)}
      />
      <ActivityPreview activityData={getActivityObject(activity)}/>
      <ContactPreview
        linkedin={contact.fields.linkedin}
        github={contact.fields.github}
        email={contact.fields.email}
      />
    </>
  );
}
