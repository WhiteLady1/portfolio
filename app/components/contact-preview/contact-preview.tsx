'use client'
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { LinkedinIcon } from "./linkedin-icon";
import { GithubIcon } from "./github-icon";
import { GmailIcon } from "./gmail-icon";
import { useEffect, useState } from "react";
import { Alert } from "..";

interface ContactProps {
  linkedin: string;
  github: string;
  email: string;
}

export const ContactPreview:React.FC<ContactProps> = ({
  linkedin,
  github,
  email
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertProgress, setAlertProgress] = useState(0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const progressInterval = setInterval(() => {
        setAlertProgress(prevValue => prevValue + 5)
      }, 100);
      const alertTimeout = setTimeout(() => {
        setShowAlert(false);
        setAlertProgress(0);
      }, 3500);
      return () => {
        clearInterval(progressInterval);
        clearTimeout(alertTimeout);
      };
    }
  }, [showAlert]);

  return (
    <>
      <Card
        className='col-start-2 sm:col-start-1 row-start-4 row-end-5 sm:row-end-6 p-0 bg-transparent sm:bg-[--background-contact]'
        shadow='none'
      >
        <CardBody className='flex flex-row sm:flex-col flex-nowrap justify-evenly items-center p-0'>
          <Button href={linkedin} isIconOnly as={Link} size="sm" className="text-[--text-contact] bg-[--contact-icons]">
            <LinkedinIcon filled width={20} height={20} label="Linkedin Blanka Semanová" />
          </Button>
          <Button href={github} isIconOnly as={Link} size="sm" className="text-[--text-contact] bg-[--contact-icons]">
            <GithubIcon filled width={20} height={20} label="Github Blanka Semanová" />
          </Button>
          <Button isIconOnly size="sm" className="text-[--text-contact] bg-[--contact-icons]" onPress={() => copyToClipboard(email)}>
            <GmailIcon filled width={20} height={20} label="Gmail Blanka Semanová" />
          </Button>
        </CardBody>
      </Card>
      {showAlert && (
        <Alert text="Copied to clipboard!" progress={alertProgress} />
      )}
    </>
  );
};
