type iconProps = {
  className: string;
};

export default function DownArrowIcon(props: Readonly<iconProps>) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeLinecap="butt" strokeLinejoin="miter">
        <polyline
          points="2 7 12 17 22 7"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}
