import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
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
      className='col-start-1 row-start-1 row-end-5 flex justify-between pt-2 w-full text-emerald-950'
      shadow='none'
    >
      <CardHeader className="flex flex-col justify-end items-start">
        <p className="text-2xl font-semibold text-[#DC2D4E]">{name}</p>
        <p className="text-xs text-[#F9506D]">{moto}</p>
        {description && (
          <div>{documentToReactComponents(description)}</div>
          )
        }
      </CardHeader>
      <CardBody className='relative'>
        {/* <Image
          className="object-cover"
          src={imageUrl}
          alt="About me profile photo"
          fill
          priority
        /> */}
        <ExperiencePreview countOfProject={5} />
      </CardBody>
    </Card>
  );
};
