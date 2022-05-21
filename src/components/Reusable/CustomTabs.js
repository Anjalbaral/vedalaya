import React from "react";

function CustomTabs({ tablist, activetab, setActivetab }) {
	return (
		<div className="custom-tabs">
			{tablist.map((tl, index) => {
				let isActive = tl.value === activetab;
				return (
					<div
						onClick={() => {
							setActivetab(tl.value);
						}}
						key={index}
						className={`custom-tabs__tab ${isActive && "active-tab"}`}
					>
						<span>{tl.label}</span>
					</div>
				);
			})}
		</div>
	);
}

export default CustomTabs;
