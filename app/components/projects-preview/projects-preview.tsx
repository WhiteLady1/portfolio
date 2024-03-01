'use client'
import { ColleagueSkeleton, ProjectSkeleton, TechnologySkeleton } from "@/app/page";
import { Document } from "@contentful/rich-text-types";
import { Card, CardBody } from "@nextui-org/react";
import { Asset, Entry } from "contentful";
import { ProjectsCarousel } from "..";

interface ColleagueData {
  name: string;
}

export interface ProjectData {
  title: string;
  description: Document;
  link: string;
  slug: string;
  client: string;
  type: string;
  technologies: string[];
  colleagues: ColleagueData[];
  imageUrl: string;
  projectStart: string;
  projectEnd: string;
}

interface ProjectsPreviewProps {
  data: Entry<ProjectSkeleton, undefined, string>[];
}

export const ProjectsPreview:React.FC<ProjectsPreviewProps> = ({
  data,
}) => {
  const getDataObject = (rowArray: Entry<ProjectSkeleton, undefined, string>[]): ProjectData[] => {
    const result = rowArray.map(item => {
      const url = item.fields.image as Asset;
      const techlogies = item.fields.technologies as Entry<TechnologySkeleton, undefined, string>[];
      const colleagues = item.fields.colleagues as Entry<ColleagueSkeleton, undefined, string>[];

      return ({
        title: item.fields.title,
        description: item.fields.description,
        link: item.fields.link,
        slug: item.fields.slug,
        client: item.fields.client,
        type: item.fields.type,
        technologies: techlogies.map(technology => technology.fields?.name),
        colleagues: colleagues?.map(colleague => colleague.fields),
        imageUrl: `https${url?.fields.file?.url}`,
        projectStart: item.fields.projectStart,
        projectEnd: item.fields.projectEnd
      })
    })
    return result;
  };

  return (
    <Card
      className='col-span-2 row-start-6 row-end-13 flex-grow w-full text-emerald-950 bg-background/60'
      shadow='none'
      isBlurred
    >
      <CardBody className=''>
        <ProjectsCarousel
          items={getDataObject(data)}
        />
      </CardBody>
    </Card>
  );
};
