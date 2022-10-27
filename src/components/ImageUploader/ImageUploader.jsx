import React from "react";
import styles from "./ImageUploader.module.scss";
import Dropzone from "react-dropzone";

const ImageUploader = () => {
	return (
		<div className={styles.image_uploader}>
			<h1>Upload your image</h1>
			<h4>File should be JPEG, PNG only</h4>
			<div className={styles.dropzone}>
				<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
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
										// className='w-2 h-2'
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
			</div>
		</div>
	);
};

export default ImageUploader;
