type IconProps = {
  className?: string;
};

export default function TimeClockIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g fill="none">
        <line
          x1="12"
          x2="12"
          y1="2.25"
          y2="4"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <line
          x1="21.75"
          x2="20"
          y1="12"
          y2="12"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <line
          x1="12"
          x2="12"
          y1="21.75"
          y2="20"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <line
          x1="2.25"
          x2="4"
          y1="12"
          y2="12"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <polyline
          points="8 7 12 12 16 12"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}
