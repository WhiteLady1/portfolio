'use client'
import { Card, CardBody } from "@nextui-org/react";
import { ProjectsCarousel } from "..";
import { ProjectData } from "@/app/services";

interface ProjectsPreviewProps {
  data: ProjectData[];
}

export const ProjectsPreview:React.FC<ProjectsPreviewProps> = ({
  data,
}) => {
  console.log(data)
  return (
    <Card
      className='col-span-2 row-start-6 row-end-13 flex-grow w-full text-emerald-950 bg-background/60'
      shadow='none'
      isBlurred
    >
      <CardBody className=''>
        <ProjectsCarousel
          items={data}
        />
      </CardBody>
    </Card>
  );
};
