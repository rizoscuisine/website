type IconProps = {
  className: string;
};

export default function RatingIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        <polygon points="23.985 8.692 15.704 7.489 12 -.014 8.296 7.489 .015 8.692 6.008 14.534 4.593 22.781 12 18.889 19.407 22.781 17.992 14.534 23.985 8.692" />
      </g>
    </svg>
  );
}
