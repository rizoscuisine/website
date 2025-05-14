type IconProps = {
  className?: string;
};

export default function MenuIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        <line strokeLinecap="square" x1="2" x2="22" y1="12" y2="12" />
        <line strokeLinecap="square" x1="2" x2="22" y1="5" y2="5" />
        <line strokeLinecap="square" x1="2" x2="22" y1="19" y2="19" />
      </g>
    </svg>
  );
}
