import React from "react";

//include images into your bundle

//create your first component
const reloj = {
	display: "flex",
	color: "white",
};
const num = {
	padding: "10px",
	width: "50px",
	background: "#2E2E2E ",
	border: "1px solid #848484",
	margin: "5px",
	textAlign: "center",
	borderRadius: 6,
	alignItems: "center",
};
const clock = {
	paddingTop: "20px",
	width: "50px",
	background: "#2E2E2E ",
	border: "1px solid #848484",
	margin: "5px",
	textAlign: "center",
	borderRadius: 6,
	alignItems: "center",
};
const Home = (props) => {
	return (
		<div style={{ background: "black" }}>
			<div className="d-flex justify-content-center" style={reloj}>
				<div style={clock}>
					<i
						style={{ fontSize: "35px" }}
						className="fas fa-clock"></i>
				</div>
				<div style={num}>
					<h1>{props.num6}</h1>
				</div>
				<div style={num}>
					<h1>{props.num5}</h1>
				</div>
				<div style={num}>
					<h1>{props.num4}</h1>
				</div>
				<div style={num}>
					<h1>{props.num3}</h1>
				</div>
				<div style={num}>
					<h1>{props.num2}</h1>
				</div>
				<div style={num}>
					<h1>{props.num1}</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
