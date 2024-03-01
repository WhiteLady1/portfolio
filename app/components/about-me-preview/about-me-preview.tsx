import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Avatar, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
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
      className='col-start-1 row-start-1 row-end-5 flex justify-between w-full text-emerald-950 bg-background/60'
      shadow='none'
      isBlurred
    >
      <CardHeader className="flex flex-col justify-end items-start h-3/6">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-xs">{moto}</p>
        {description && (
          <div>{documentToReactComponents(description)}</div>
          )
        }
      </CardHeader>
      <CardBody className='relative'>
        <Image
          className="object-cover"
          src={imageUrl}
          alt="About me profile photo"
          fill
          priority
        />
      </CardBody>
    </Card>
  );
};
