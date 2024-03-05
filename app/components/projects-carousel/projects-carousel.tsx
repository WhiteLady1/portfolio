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
      <h3 className="mb-2 text-2xl">Project timeline</h3>
      <ul>
        {items.map(item => (
          <li key={item.slug} className="relative pl-12 mb-6 before:block before:absolute before:top-5 before:left-4 before:bg-[#84B130] before:w-[2px] before:h-full before:rounded-2xl">
            <span className="flex">
              <h3 className=" text-lg">{item.title}</h3>
              <p className="h-4 px-1 ml-1 text-nowrap text-white text-[10px] text-right bg-[#84B130]">{item.type}</p>
            </span>
            <p className="text-[10px]">{item.client}</p>
            <p className="absolute top-1 left-0 w-12 pb-1 text-[8px] bg-white">{item.projectStart}</p>
            <div className="text-xs">{documentToReactComponents(item.description)}</div>
            <ul className="flex gap-1 m-1">
              {item.technologies.map((technology, index) => (
                <li key={index}>
                  <Chip className="bg-[#F9506D] text-white" size="sm">{technology.name}</Chip>
                </li>
              ))}
            </ul>
            {item.colleagues && (
              <ul className="flex gap-1">
                {item.colleagues.map((colleague, index) => (
                  <li key={index}>
                    <Avatar showFallback name={colleague?.name} className="text-white bg-[#3F8A40]" />
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
