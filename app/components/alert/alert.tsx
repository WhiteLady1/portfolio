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
  <div className="absolute top-0 left-0 flex justify-center w-full">
    <Card radius="none" className="flex flex-col w-full md:w-[710px] h-[50px] md:rounded-b-xl bg-[--background-card] text-[--text] z-50">
      <CardBody className=" flex flex-row gap-2">
        <span>
          <InfoIcon width={24} height={24} label="Alert icon" />
        </span>
        <p>{text}</p>
      </CardBody>
      <Progress classNames={{ indicator: "!bg-[--success]" }} radius="none" size="sm" aria-label="Progress" value={progress} />
    </Card>
  </div>
);
