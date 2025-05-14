type IconProps = {
  className?: string;
};

export default function HouseIcon({ className }: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g fill="none">
        <polyline
          points="2 13 16 2 30 13"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <polyline
          points="13 29 13 20 19 20 19 29"
          stroke="currentColor"
          strokeMiterlimit="10"
        />
        <path
          d="m5,16v10c0,1.657,1.343,3,3,3h16c1.657,0,3-1.343,3-3v-10"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}
