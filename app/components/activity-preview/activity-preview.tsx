'use client'
import { Document } from "@contentful/rich-text-types";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface ActivityData {
  name: string;
  description: Document;
  link: string;
  imageUrl: string;
  organization: string;
}

interface ActivityProps {
  activityData: ActivityData[]
}

export const ActivityPreview: React.FC<ActivityProps> = ({
  activityData
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevState => (prevState + 1) % activityData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentImage, activityData]);

  return (
    <Card
      className='col-start-2 row-start-1 row-end-3 text-white bg-background/60'
      shadow='none'
      isBlurred
    >
      <CardBody className='relative flex overflow-hidden'>
        <ul className='z-10 [&>*:nth-child(3n)]:text-right [&>*:nth-child(3n+2)]:text-center [&>*:nth-child(3n+1)]:text-left'>
          {activityData.map((activity, index) => (
            <li key={index}>{activity.name}</li>
          ))}
        </ul>
        {activityData.map((activity, index) => (
          <span
            key={index}
            className={`absolute top-0 left-0 contrast-50  ${index===currentImage ? ' translate-x-0' : '-translate-y-full'} ease-out duration-700`}
          >
            <Image
              key={index}
              src={activity.imageUrl}
              width={200}
              height={200}
              alt={`Picture from activity ${activity.name}`}
            />
          </span>
        ))}
      </CardBody>
    </Card>
  );
};
