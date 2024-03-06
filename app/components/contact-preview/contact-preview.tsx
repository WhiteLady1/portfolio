'use client'
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { LinkedinIcon } from "./linkedin-icon";
import { GithubIcon } from "./github-icon";
import { GmailIcon } from "./gmail-icon";
import { useEffect, useState } from "react";
import { Alert, Modal } from "..";

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
        setAlertProgress(prevValue => prevValue + 17)
      }, 1000);
      const alertTimeout = setTimeout(() => {
        setShowAlert(false);
        setAlertProgress(0);
      }, 7000);
      return () => {
        clearInterval(progressInterval);
        clearTimeout(alertTimeout);
      };
    }
  }, [showAlert]);

  return (
    <>
      <Card
        className='col-start-2 row-start-4 row-end-5 p-0 bg-transparent'
        shadow='none'
      >
        <CardBody className='flex flex-row gap-2 flex-wrap justify-center items-center p-0'>
          <Button href={linkedin} isIconOnly as={Link} className="text-[--text-contrast] bg-[--contact-icons]">
            <LinkedinIcon filled width={24} height={24} label="Linkedin Blanka Semanová" />
          </Button>
          <Button href={github} isIconOnly as={Link} className="text-[--text-contrast] bg-[--contact-icons]">
            <GithubIcon filled width={24} height={24} label="Github Blanka Semanová" />
          </Button>
          <Button isIconOnly className="text-[--text-contrast] bg-[--contact-icons]" onPress={() => copyToClipboard(email)}>
            <GmailIcon filled width={24} height={24} label="Gmail Blanka Semanová" />
          </Button>
        </CardBody>
      </Card>
      {showAlert && (
        <Alert text="Copied to clipboard!" progress={alertProgress} />
      )}
    </>
  );
};
