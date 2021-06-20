import React, { useState, useEffect } from "react";
import Context from "./Context/Context";

import './Styles/global.scss'

import BasicHeader from "./Components/BasicHeader";
import BodyComponent from "./Components/BodyComponent";
import FooterComponent from "./Components/FooterComponent";



function App() {
	return (
		<Context>
			<div className="App">
				<BasicHeader />
				<BodyComponent />
				<FooterComponent />
			</div>
		</Context>
	);
}

export default App;
