import { Card, CardBody } from "@nextui-org/react";

interface ExperiencePreviewProps {
  countOfProject: number;
}

export const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({
  countOfProject
}) => {
  const getYaersOfExperiences = (): number => {
    const date = new Date
    const yaers = date.getFullYear() - 2021;
    return yaers;
  };

  return (
    <Card shadow="none" className="pt-0 h-full bg-[--background-experience]">
      <CardBody className="flex flex-row items-center justify-between gap-3 text-[10px] text-[--text-experience] overflow-hidden">
        <span className="w-3/6">
          <p className="text-2xl">{countOfProject}</p>
          <p className=" leading-none">Clients projects</p>
        </span>
        <span className="w-3/6">
          <p className="text-2xl">{getYaersOfExperiences()}</p>
          <p  className=" leading-none">Years of experience</p>
        </span>
      </CardBody>
    </Card>
  );
};
