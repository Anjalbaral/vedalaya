import React from "react";
import { NavLink } from "react-router-dom";
import activemenuicon from "../../assets/images/triangle.png";

function NavItem({ item, isActive, onMouseEnter, onMouseLeave }) {
	return (
		<NavLink style={{ height: "70px" }} onMouseEnter={() => onMouseEnter(item.path, item.content)} onMouseLeave={onMouseLeave} className={`nav-item ${isActive && "active"}`} to={item.path}>
			<img src={activemenuicon} />
			<span>{item.name}</span>
		</NavLink>
	);
}

export default NavItem;
