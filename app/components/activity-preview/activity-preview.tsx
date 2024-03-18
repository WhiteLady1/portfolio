'use client'
import { Document } from "@contentful/rich-text-types";
import { Card, CardBody, Link, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from "../modal-component";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { YoutubeEmbed } from "..";

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
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevState => (prevState + 1) % activityData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentImage, activityData]);

  return (
    <>
      <Card
        className='col-start-2 row-start-1 row-end-4 sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:row-end-6 h-full text-[--text-contrast] bg-[--background-card]'
        shadow='none'
        isPressable
        onPress={handleOpenModal}
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
              className={`absolute flex top-0 left-0 contrast-50 w-full h-full ${index===currentImage ? ' translate-x-0' : '-translate-y-full'} ease-out duration-700`}
            >
              <Image
                className="object-cover"
                key={index}
                src={activity.imageUrl}
                alt={`Picture from activity ${activity.name}`}
                fill
              />
            </span>
          ))}
        </CardBody>
      </Card>
      <Modal
        isOpen={showModal}
        bigSize
        onClose={handleCloseModal}
      >
        <ScrollShadow  size={100} hideScrollBar>
          <ul className="flex flex-col gap-6 pt-3 pb-10 [&>*:nth-child(2n)]:text-right [&>*:nth-child(2n+1)]:text-left">
            {activityData.map((activity, index) => (
              <li key={index}>
                <h3 className="mb-2 sm:mb-4 text-2xl">{activity.name}</h3>
                <div>
                  <span
                    className={`relative ${index % 2 === 0 ? 'float-right ml-3': 'float-left mr-3'} w-[150px] sm:w-[250px] h-[100px] sm:h-[150px] mb-3`}
                  >
                    <Image
                      className="object-cover rounded-xl"
                      src={activity.imageUrl}
                      fill
                      alt={`${activity.name} picture`}
                    />
                  </span>
                  <div className={`mb-2 h-full ${index % 2 === 0 && 'text-left'}`}>
                    {documentToReactComponents(activity.description)}
                    <p className="text-sm italic">{activity.organization}</p>
                  </div>
                  {activity.link && (
                    <YoutubeEmbed
                      embedSrc={activity.link}
                      title={`${activity.name} embed youtube video`}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </ScrollShadow>
      </Modal>
    </>
  );
};
