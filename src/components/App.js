import React, { useState } from "react";
import "./../styles/App.css";
import Modal from "./Modal.Component";

const App = () => {
	const [btnClicked, setBtnClicked] = useState(false);
	return (
		<div>
			{/* Do not remove the main div */}
			<Modal show={btnClicked} onClose={setBtnClicked} />
		</div>
	);
};

export default App;
