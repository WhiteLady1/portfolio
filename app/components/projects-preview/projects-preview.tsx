'use client'
import { Card, CardBody } from "@nextui-org/react";
import { Modal, ProjectsCarousel } from "..";
import { ColleagueData, ProjectData } from "@/app/services";
import { useState } from "react";
import Image from "next/image";

interface ProjectsPreviewProps {
  data: ProjectData[];
}

export const ProjectsPreview:React.FC<ProjectsPreviewProps> = ({
  data,
}) => {
  const [showColleague, setshowColleaguee] = useState<ColleagueData | undefined>();

  const handleOpenModal = (colleague: ColleagueData) => {
    setshowColleaguee(colleague);
  };

  const handleCloseModal = () => {
    setshowColleaguee(undefined)
  };

  return (
    <>
    <Card
      className='col-span-2 row-start-6 row-end-13 sm:col-start-4 sm:col-end-7 sm:row-start-1 sm:row-end-10 flex-grow w-full h-[650px] sm:h-full bg-[--background-card] text-[--text] sm:p-1'
      shadow='none'
    >
      <CardBody className="text-[--text-experience]">
        <ProjectsCarousel
          items={data}
          showModal={handleOpenModal}
        />
      </CardBody>
    </Card>
    <Modal
      isOpen={showColleague? true : false}
      linkText={showColleague?.linkedin ? 'Linkedn' : undefined}
      url={showColleague?.linkedin ? showColleague.linkedin : undefined}
      onClose={handleCloseModal}
    >
      <div className="flex flex-col justify-center items-center gap-3 h-full">
        {showColleague?.imageUrl && (
          <Image
            className=" rounded-full"
            src={showColleague?.imageUrl}
            alt={showColleague.name}
            width={100}
            height={100}
          />
        )}
        <p className="text-xl">{showColleague?.name}</p>
        {showColleague?.linkedin === null && (
          <p className=" text-sm text-center">Team member does not have a LinkedIn profile</p>
        )}
      </div>
    </Modal>
    </>
  );
};

