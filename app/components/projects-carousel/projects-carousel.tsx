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
      <h3 className="mb-2 sm:mb-4 text-2xl sm:text-3xl">Project timeline</h3>
      <ul>
        {items.map(item => (
          <li key={item.slug} className="relative pl-12 mb-6 sm:mb-8 before:block before:absolute before:top-5 before:left-4 before:bg-[--background-flag] before:w-[2px] before:h-full before:rounded-2xl">
            <span className="flex">
              <h3 className="text-lg sm:text-2xl">{item.title}</h3>
              <p className="h-4 px-1 ml-1 text-nowrap text-[10px] text-right bg-[--background-flag] text-[--text-flag]">{item.type}</p>
            </span>
            <p className="text-[10px]">{item.client}</p>
            <p className="absolute top-1 left-0 w-12 pb-1 text-[8px] bg-[--background-card]">{item.projectStart}</p>
            <div className="text-xs sm:text-base sm:mt-2">{documentToReactComponents(item.description)}</div>
            <ul className="flex gap-1 mt-1 sm:mt-2">
              {item.technologies.map((technology, index) => (
                <li key={index}>
                  <Chip className="bg-[--background-chip] text-[--text-contrast]" size="sm">{technology.name}</Chip>
                </li>
              ))}
            </ul>
            {item.colleagues && (
              <ul className="flex gap-1 mt-1 sm:mt-2">
                {item.colleagues.map((colleague, index) => (
                  <li key={index}>
                    <Avatar showFallback name={colleague?.name} className="text-[--text-contrast] bg-[--contact-icons]" />
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
