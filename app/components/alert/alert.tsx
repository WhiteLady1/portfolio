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
  <Card radius="none" className="absolute top-0 left-0 flex flex-col justify-between w-full h-[50px] bg-[--background-card] z-50">
    <CardBody className=" flex flex-row gap-2">
      <span className=" text-[#3F8A40]">
        <InfoIcon width={24} height={24} label="Alert icon" />
      </span>
      <p>{text}</p>
    </CardBody>
    <Progress classNames={{ indicator: "bg-[#84B130]" }} size="sm" aria-label="Progress" value={progress} />
  </Card>
);
