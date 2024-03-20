import { SvgIconProps } from "../contact-preview/linkedin-icon";

export const CloseIcon: React.FC<SvgIconProps> = ({
  fill = 'currentColor',
  filled = false,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}
      stroke="currentColor"
      stroke-width="1.5"
      {...props}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
};
