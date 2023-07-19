import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
	const [btnClicked, setBtnClicked] = useState(false);
	const modal = (
		<div className='model-overlay'>
			<button
				className='model-close btn'
				onClick={() => setBtnClicked(!btnClicked)}
			>
				{" "}
				Close
			</button>

			<p className='model-p'>This is the content of the modal</p>
		</div>
	);
	return (
		<div>
			<button className='btn' onClick={() => setBtnClicked(!btnClicked)}>
				Show Modal
			</button>
			{btnClicked && modal}
		</div>
	);
};

export default Modal;
