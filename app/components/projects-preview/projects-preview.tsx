'use client'
import { Card, CardBody } from "@nextui-org/react";
import { ProjectsCarousel } from "..";
import { ProjectData } from "@/app/services";

interface ProjectsPreviewProps {
  data: ProjectData[];
}

export const ProjectsPreview:React.FC<ProjectsPreviewProps> = ({
  data,
}) => (
  <Card
    className='col-span-2 row-start-6 row-end-13 sm:col-start-4 sm:col-end-7 sm:row-start-1 sm:row-end-10 flex-grow w-full bg-[--background-card] text-[--text] sm:p-1'
    shadow='none'
  >
    <CardBody className="text-[--text-experience]">
      <ProjectsCarousel
        items={data}
      />
    </CardBody>
  </Card>
);

