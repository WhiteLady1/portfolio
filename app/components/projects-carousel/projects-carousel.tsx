import { ProjectData } from "@/app/services";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Avatar, Chip, ScrollShadow } from "@nextui-org/react";

interface ProjectsCarouselProps {
  items: ProjectData[];
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  items,
}) => {
  return (
    <ScrollShadow size={100} hideScrollBar>
      <h3 className="mb-2">Project timeline</h3>
      <ul>
        {items.map(item => (
          <li key={item.slug} className="relative pl-14 mb-2">
            <h4>{item.title}</h4>
            <p className="text-[10px]">{item.client}</p>
            <p className="absolute top-1 left-0 w-12 text-[8px]">{item.projectStart}</p>
            <div className="text-xs">{documentToReactComponents(item.description)}</div>
            <ul className="flex gap-1 m-1">
              {item.technologies.map((technology, index) => (
                <li key={index}>
                  <Chip color="warning" size="sm">{technology.name}</Chip>
                </li>
              ))}
            </ul>
            {item.colleagues && (
              <ul className="flex gap-1">
                {item.colleagues.map((colleague, index) => (
                  <li key={index}>
                    <Avatar showFallback name={colleague?.name} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </ScrollShadow>
  );
};
