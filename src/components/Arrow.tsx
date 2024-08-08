type ArrowProps = {
	fillColor?: string;
	size?: number;
};

const Arrow = ({ fillColor = "fill-black", size = 18 }: ArrowProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			width={size}
			className={fillColor}
		>
			<title>Arrow indicating navigation</title>
			<path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" />
		</svg>
	);
};

export default Arrow;
