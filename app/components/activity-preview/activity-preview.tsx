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
      className='col-start-2 row-start-1 row-end-4 text-[--text-contrast] bg-[--background-card]'
      shadow='none'
    >
      <CardBody className='relative flex justify-center overflow-hidden'>
        <ul className='flex flex-col justify-evenly z-10 h-full [&>*:nth-child(3n)]:text-right [&>*:nth-child(3n+2)]:text-center [&>*:nth-child(3n+1)]:text-left'>
          {activityData.map((activity, index) => (
            <li key={index}>
              <p>{activity.name}</p>
            </li>
          ))}
        </ul>
        {activityData.map((activity, index) => (
          <span
            key={index}
            className={`absolute flex top-0 left-0 contrast-50 h-full ${index===currentImage ? ' translate-x-0' : '-translate-y-full'} ease-out duration-700`}
          >
            <Image
              className=" object-cover"
              key={index}
              src={activity.imageUrl}
              width={300}
              height={300}
              alt={`Picture from activity ${activity.name}`}
            />
          </span>
        ))}
      </CardBody>
    </Card>
  );
};
