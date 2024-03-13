import { Button, Card, CardBody, CardFooter, Link } from "@nextui-org/react";

interface ModalProps {
  linkText?: string;
  url?: string;
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
  <div className={`absolute top-0 left-0 flex justify-center items-center h-screen w-screen backdrop-blur-sm bg-zinc-600/50 ${isOpen ? 'visible' : 'hidden'} z-20`}>
    <Card className=" w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] p-2">
      <CardBody>
        {children}
      </CardBody>
      <CardFooter className="flex justify-evenly">
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
