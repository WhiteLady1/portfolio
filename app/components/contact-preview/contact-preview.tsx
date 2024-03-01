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
        className='col-start-2 row-start-3 row-end-5 text-emerald-950 bg-background/60'
        shadow='none'
        isBlurred
      >
        <CardBody className='flex flex-row gap-2 flex-wrap content-center'>
          <Button href={linkedin} isIconOnly as={Link} color='primary'>
            <LinkedinIcon filled width={24} height={24} label="Linkedin Blanka Semanová" />
          </Button>
          <Button href={github} isIconOnly as={Link} color='secondary'>
            <GithubIcon filled width={24} height={24} label="Github Blanka Semanová" />
          </Button>
          <Button isIconOnly color='danger' onPress={() => copyToClipboard(email)}>
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
