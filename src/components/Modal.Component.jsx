import React, { useEffect, useRef } from "react";
import "./modal.css";

const Modal = ({ show, onClose }) => {
	const modalRef = useRef();
	useEffect(() => {
		const outSideClickHandler = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				onClose(false);
			}
		};
		if (show) {
			document.addEventListener("click", outSideClickHandler);
		}

		return () => {
			document.removeEventListener("click", outSideClickHandler);
		};
	}, [show]);

	const modal = (
		<div className='model-overlay' ref={modalRef}>
			<button className='model-close' onClick={() => onClose(false)}>
				Close
			</button>

			<p className='model-p'>This is the content of the modal</p>
		</div>
	);
	return (
		<>
			<button className='btn' onClick={() => onClose(true)}>
				Show Modal
			</button>
			{show && modal}
		</>
	);
};

export default Modal;
