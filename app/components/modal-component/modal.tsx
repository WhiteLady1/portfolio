'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";
import { useEffect } from "react";
import { CloseIcon } from "./close-icon";

interface ModalProps {
  linkText?: string;
  url?: string;
  isOpen: boolean;
  bigSize?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  linkText,
  url,
  isOpen = false,
  bigSize = false,
  onClose,
  children
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <div className={`absolute top-0 left-0 flex sm:justify-center sm:items-center h-screen w-screen backdrop-blur-sm bg-zinc-600/50 ${isOpen ? 'visible' : 'hidden'} z-20`}>
      <Card
        className={`${bigSize ? 'w-full m-[30px] mb-[50px]' : 'w-[300px]'} ${bigSize && 'sm:w-[600px]'} ${bigSize ? 'sm:h-[650px]' : 'h-[300px]'} p-2`}
      >
        <CardHeader className="absolute top-0 right-0 justify-end">
          <span onClick={onClose}>
            <CloseIcon height={24} width={24} label="Close icon" />
          </span>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
        <CardFooter className={`flex justify-evenly ${bigSize && 'h-[150px]'}`}>
          <Button className=" bg-[--warning] text-[--text-contrast]" onClick={onClose}>Close</Button>
          {url && (
            <Button
              className=" bg-[--success] text-[--text-contrast]"
              as={Link}
              href={url}
              showAnchorIcon
              isExternal
            >
              {linkText}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
