import { Button, Card, CardBody, CardFooter, Link } from "@nextui-org/react";

interface ModalProps {
  linkText: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  linkText,
  url,
  isOpen = false,
  onClose,
  children
}) => (
  <div className={`absolute top-0 left-0 flex justify-center items-center h-screen w-screen backdrop-blur-sm bg-zinc-600/50 ${isOpen ? 'visible' : 'hidden'}`}>
    <Card className=" w-[300px] h-[300px] p-2">
      <CardBody>
        {children}
      </CardBody>
      <CardFooter className="flex justify-evenly">
        <Button color="danger" onClick={onClose}>Close</Button>
        <Button
          color="primary"
          as={Link}
          href={url}
          showAnchorIcon
          isExternal
        >
          {linkText}
        </Button>
      </CardFooter>
    </Card>
  </div>
);
