import React, { useEffect } from "react";
import NavItems from "./NavItem";
import { connect, useDispatch } from "react-redux";
import { changeActiveNav } from "../../redux/actions";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";
import { useLocation, Link } from "react-router-dom";

function TopNav({ navItems, activeNav }) {
	let location = useLocation();
	let dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname) {
			dispatch(changeActiveNav(location.pathname));
		}
	}, [location.pathname]);

	return (
		<div className={`public-layout-top-nav`}>
			{/* nav left */}
			<div className="public-layout-top-nav__left">
				{/* logo here */}
				<Link to="/">
					<img src={Logo} />
				</Link>
			</div>
			{/* nav right */}
			<div className="public-layout-top-nav__right">
				{navItems.map((itm, inx) => {
					let isActive = activeNav === itm.path;
					return <NavItem item={itm} key={inx} isActive={isActive} />;
				})}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		navItems: state.main.navItems,
		activeNav: state.main.activeNav
	};
};

export default connect(mapStateToProps)(TopNav);
