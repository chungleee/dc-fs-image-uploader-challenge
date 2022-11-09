import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import style from "./App.module.scss";
import Uploading from "./components/Uploading/Uploading";

const App = () => {
	const [is_uploading, set_is_uploading] = useState(true);

	const handle_is_uploading = (bool) => {
		set_is_uploading(bool);
	};

	return (
		<div className={style.app}>
			{is_uploading ? (
				<Uploading />
			) : (
				<ImageUploader handle_is_uploading={handle_is_uploading} />
			)}
		</div>
	);
};

export default App;
