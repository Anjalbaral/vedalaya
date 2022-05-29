import React from "react";
import Empty from "../../assets/images/Empty.svg";

const EmptyComp = (props) => {
	return (
		<div style={{ width: "100%", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: "0px",
					alignItems: "center",
					justifyContent: "center",
					width: "250px",
					height: "250px",
					borderRadius: "50%",
					borderWidth: "1px",
					borderColor: "gray",
					backgroundColor: "rgba(0,0,0,0.04)"
				}}
			>
				<img src={Empty} style={{ width: "120px", opacity: "0.5" }} />
				<span style={{ fontSize: "18px", textAlign: "center", color: "rgba(0,0,0,0.3)", marginTop: "20px" }}>{props.children}</span>
			</div>
		</div>
	);
};

export default EmptyComp;
