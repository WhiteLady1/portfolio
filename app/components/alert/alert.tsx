import { Card, CardBody, Progress } from "@nextui-org/react";
import { InfoIcon } from "./info-icon";

interface AlertProps {
  text: string;
  progress: number;
}

export const Alert: React.FC<AlertProps> = ({
  text,
  progress
}) => (
  <Card radius="none" isBlurred className="absolute top-0 left-0 flex flex-col justify-between w-full h-[50px] bg-background/90">
    <CardBody className=" flex flex-row gap-2">
      <span className=" text-green-700">
        <InfoIcon width={24} height={24} label="Alert icon" />
      </span>
      <p>{text}</p>
    </CardBody>
    <Progress color="success" size="sm" aria-label="Progress" value={progress} />
  </Card>
);
