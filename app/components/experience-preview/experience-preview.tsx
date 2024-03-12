import { Card, CardBody, Divider } from "@nextui-org/react";

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
      <CardBody className="flex flex-row sm:flex-col items-center justify-between sm:justify-evenly gap-3 sm:gap-1 text-[10px] text-[--text-experience] overflow-hidden">
        <span className="w-3/6 sm:w-full">
          <p className="text-2xl sm:text-5xl">{countOfProject}</p>
          <p className="leading-none">Clients projects</p>
        </span>
        <Divider className="hidden sm:block" />
        <span className="w-3/6 sm:w-full">
          <p className="text-2xl sm:text-5xl">{getYaersOfExperiences()}</p>
          <p  className="leading-none">Years of experience</p>
        </span>
      </CardBody>
    </Card>
  );
};
