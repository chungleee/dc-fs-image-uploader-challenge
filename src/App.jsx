import React from "react";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import style from "./App.module.scss";

const App = () => {
	return (
		<div className={style.app}>
			<ImageUploader />
		</div>
	);
};

export default App;
