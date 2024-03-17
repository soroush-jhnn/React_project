import React from "react";

const PrevArrow = ({ width, height, color, stroke }) => {
	const className = `w-${width} h-${height}`;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke={color}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={stroke ?? 2}
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/>
		</svg>
	);
};

export default PrevArrow;
