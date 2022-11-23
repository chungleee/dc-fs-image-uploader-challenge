import React from "react";
import styles from "./Checkmark.module.scss";

const Checkmark = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
			className={`${styles.humbleicons} humbleicons hi-check-circle`}
		>
			<g
				xmlns='http://www.w3.org/2000/svg'
				stroke='currentColor'
				stroke-width='2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M8 13l2.5 2.5L16 10'
				/>
				<path d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
			</g>
		</svg>
	);
};

export default Checkmark;
