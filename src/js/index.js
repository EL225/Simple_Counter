//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter = 0;
//render your react application
setInterval(() => {
	let num1 = Math.floor(counter / 1) % 10;
	let num2 = Math.floor(counter / 10) % 10;
	let num3 = Math.floor(counter / 100) % 10;
	let num4 = Math.floor(counter / 1000) % 10;
	let num5 = Math.floor(counter / 10000) % 10;
	let num6 = Math.floor(counter / 100000) % 10;

	ReactDOM.render(
		<Home
			num6={num6}
			num5={num5}
			num4={num4}
			num3={num3}
			num2={num2}
			num1={num1}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
