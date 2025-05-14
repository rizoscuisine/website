type IconProps = {
  className: string;
};

export default function ExitIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g strokeLinecap="square" strokeLinejoin="miter">
        <line x1="19" y1="19" x2="5" y2="5" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </g>
    </svg>
  );
}
