type IconProps = {
	className: string;
};

export default function UpArrowIcon(props: Readonly<IconProps>) {
	return (
		<svg className={props.className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g strokeLinecap="butt" strokeLinejoin="miter">
				<polyline points="22,17 12,7 2,17" strokeLinecap="square" strokeMiterlimit="10" />
			</g>
		</svg>
	);
}
