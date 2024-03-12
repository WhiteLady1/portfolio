import Image from "next/image";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ExperiencePreview } from "..";

interface AboutMePreviewProps {
  name: string;
  moto: string;
  description?: Document;
  imageUrl: string; 
}

export const AboutMePreview: React.FC<AboutMePreviewProps> = ({
  name,
  moto,
  description,
  imageUrl
}) => {
  return (
    <Card
      className='col-start-1 row-start-1 row-end-5 flex justify-evenly w-full bg-[--background-card]'
      shadow='none'
    >
      <CardHeader className="flex flex-col justify-end items-start h-3/6 pb-0">
        {/* <span className="absolute top-4 right-3 w-16 h-16">
          <Image
            className="object-cover rounded-full"
            src={imageUrl}
            alt="About me profile photo"
            fill
            priority
          />
        </span> */}
        <p className="text-[28px] leading-tight font-semibold text-[--main-title]">{name}</p>
        <p className="text-xs text-[--subtitle]">{moto}</p>
        {description && (
          <div>{documentToReactComponents(description)}</div>
          )
        }
      </CardHeader>
      <CardBody className='relative h-3/6'>
        <ExperiencePreview countOfProject={5} />
      </CardBody>
    </Card>
  );
};
