import React from "react";
import styles from "./ImageUploader.module.scss";
import Dropzone from "react-dropzone";
import { useState } from "react";

const ImageUploader = ({ handle_is_uploading }) => {
	const [image, setImage] = useState(null);
	const [file_to_upload, set_file_to_upload] = useState(null);

	const fakeUploadFunction = (ms) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					uploaded: true,
				});
			}, ms);
		});
	};

	const handleUpload = async function () {
		handle_is_uploading(true);
		const { uploaded } = await fakeUploadFunction(5000);
		if (uploaded) handle_is_uploading(false);
	};

	return (
		<div className={styles.image_uploader}>
			<h1>Upload your image</h1>
			<h4>File should be JPEG, PNG only</h4>
			<div className={styles.dropzone}>
				<Dropzone
					accept={{
						"image/*": [".png", ".jpeg", ".jpg"],
					}}
					onDrop={(acceptedFiles) => {
						const file = acceptedFiles[0];
						set_file_to_upload(file);
					}}
				>
					{({ getRootProps, getInputProps }) => (
						<section>
							<div {...getRootProps()}>
								<input {...getInputProps()} />
								<div className={styles.upload_icon}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15'
										/>
									</svg>
								</div>

								<p>Drag & drop your image here</p>
							</div>
						</section>
					)}
				</Dropzone>
				{!image ? null : <img src={image} />}
			</div>
			<div className={styles.button_container}>
				<button
					onClick={() => {
						handleUpload(file_to_upload);
					}}
				>
					fake upload
				</button>
			</div>
		</div>
	);
};

export default ImageUploader;
