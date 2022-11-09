import React from "react";
import styles from "./Uploading.module.scss";

const Uploading = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2>Uploading...</h2>
				<div className={styles.progress_bar}></div>
			</div>
		</div>
	);
};

export default Uploading;
