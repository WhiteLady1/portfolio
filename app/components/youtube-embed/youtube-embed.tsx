interface YoutubeEmbedProps {
  embedSrc: string;
  title: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  embedSrc,
  title
}) => (
  <div className="mt-3 mb-3">
    <iframe
      className="w-full h-[250px] sm:h-[350px]"
      src={embedSrc}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);
