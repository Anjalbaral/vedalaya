import React from "react";
import { NavLink } from "react-router-dom";
import activemenuicon from "../../assets/images/triangle.png";

function NavItem({ item, isActive }) {
	return (
		<NavLink className={`nav-item ${isActive && "active"}`} to={item.path}>
			<img src={activemenuicon} />
			<span>{item.name}</span>
		</NavLink>
	);
}

export default NavItem;
