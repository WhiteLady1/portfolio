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
    <Card shadow="none" className="pt-0">
      <CardBody className="flex flex-row gap-3 text-xs overflow-hidden">
        <span>
          <p className="text-2xl">{countOfProject}</p>
          <p>Client projects</p>
        </span>
        <span>
          <p className="text-2xl">{getYaersOfExperiences()}</p>
          <p>Years of experience</p>
        </span>
      </CardBody>
    </Card>
  );
};
