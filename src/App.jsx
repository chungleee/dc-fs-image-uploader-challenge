import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import style from "./App.module.scss";
import Uploading from "./components/Uploading/Uploading";
import Uploaded from "./components/Uploaded/Uploaded";

const App = () => {
	const [is_uploading, set_is_uploading] = useState(false);
	const [isUploaded, setIsUploaded] = useState(false);

	const handle_is_uploading = (bool) => {
		set_is_uploading(bool);
	};

	const handleIsUploaded = (bool) => {
		setIsUploaded(bool);
	};

	if (is_uploading)
		return (
			<div className={style.app}>
				<Uploading />
			</div>
		);

	if (isUploaded)
		return (
			<div className={style.app}>
				<Uploaded />
			</div>
		);

	return (
		<div className={style.app}>
			<ImageUploader
				handle_is_uploading={handle_is_uploading}
				handleIsUploaded={handleIsUploaded}
			/>
		</div>
	);
};

export default App;
