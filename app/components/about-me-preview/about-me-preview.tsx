import Image from "next/image";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ExperiencePreview } from "..";

interface AboutMePreviewProps {
  name: string;
  moto: string;
  description?: Document;
  countOfProject?: number;
}

export const AboutMePreview: React.FC<AboutMePreviewProps> = ({
  name,
  moto,
  description,
  countOfProject
}) => {
  return (
    <Card
      className='col-start-1 sm:col-end-3 row-start-1 row-end-5 sm:row-end-3 h-[200px] sm:h-full flex justify-evenly w-full bg-[--background-card] sm:pt-10'
      shadow='none'
    >
      <CardHeader className="flex flex-col justify-end items-start h-3/6 sm:h-full pb-0 sm:pb-3">
        <p className="text-[28px] sm:text-[32px] leading-tight font-semibold text-[--main-title]">{name}</p>
        <p className="text-xs sm:text-sm text-[--subtitle]">{moto}</p>
        {description && (
          <div>{documentToReactComponents(description)}</div>
          )
        }
      </CardHeader>
      <CardBody className='relative h-3/6 sm:hidden'>
        <ExperiencePreview countOfProject={countOfProject || 0} />
      </CardBody>
    </Card>
  );
};
