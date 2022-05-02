import React, { useEffect, useState } from "react";
import NavItems from "./NavItem";
import { connect, useDispatch } from "react-redux";
import { changeActiveNav, changeMenuStatus, changeActiveHover } from "../../redux/actions";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";
import { useLocation, Link } from "react-router-dom";
import { HiMenuAlt3, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

function TopNav({ navItems, activeNav, activeHover }) {
	let location = useLocation();
	let dispatch = useDispatch();

	const [insideDialog, setInsideDialog] = useState(false);
	const [activeDialogData, setActiveDialogData] = useState({});
	console.log("activeDialogData:", activeDialogData);
	useEffect(() => {
		if (location.pathname) {
			dispatch(changeActiveNav(location.pathname));
		}
	}, [location.pathname]);

	const _onNavItemHover = (path, navdata) => {
		let navdialog = document.getElementById("navdialog");
		let topnav = document.getElementById("topnav");
		topnav.classList.add("hoverOn");
		navdialog.classList.add("nav-hover-active");
		setActiveDialogData(navdata);
		dispatch(changeActiveHover(path));
	};

	useEffect(() => {
		if (insideDialog) {
			let navdialog = document.getElementById("navdialog");
			let topnav = document.getElementById("topnav");
			topnav.classList.add("hoverOn");
			navdialog.classList.add("nav-hover-active");
		}
	}, [insideDialog]);

	const _onNavItemUnHover = () => {
		let navdialog = document.getElementById("navdialog");
		let topnav = document.getElementById("topnav");
		topnav.classList.remove("hoverOn");
		navdialog.classList.remove("nav-hover-active");
		dispatch(changeActiveHover(""));
	};

	const _onMouseEnterDialog = () => {
		setInsideDialog(true);
	};

	const _onMouseLeaveDialog = () => {
		setInsideDialog(false);
		let navdialog = document.getElementById("navdialog");
		let topnav = document.getElementById("topnav");
		topnav.classList.remove("hoverOn");
		navdialog.classList.remove("nav-hover-active");
		dispatch(changeActiveHover(""));
	};

	return (
		<>
			<div id="topnav" className={`public-layout-top-nav`}>
				{/* nav left */}
				<div className="public-layout-top-nav__left">
					{/* logo here */}
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				{/* nav right */}
				<div className="public-layout-top-nav__right">
					<>
						{navItems.map((itm, inx) => {
							let isActive = activeNav === itm.path;
							return <NavItem onMouseEnter={_onNavItemHover} onMouseLeave={_onNavItemUnHover} item={itm} key={inx} isActive={isActive} />;
						})}
						<div
							onClick={() => {
								dispatch(changeMenuStatus(true));
							}}
							className="public-layout-top-nav__right__ham"
						>
							<HiMenuAlt3 />
						</div>
					</>
				</div>
			</div>
			{/* sub nav menu dialog */}
			<div id="navdialog" onMouseEnter={_onMouseEnterDialog} onMouseLeave={_onMouseLeaveDialog} className="nav-dialog">
				<div className="nav-close">
					<IoCloseOutline />
				</div>
				<div className="parta">
					<div style={{ backgroundImage: `url(${activeDialogData.image})` }}></div>
				</div>
				<div className="partb">
					<h5>Header</h5>
					<span>{activeDialogData.description}</span>
					<button className="btn-primary rounded">
						More
						<HiOutlineArrowNarrowRight />
					</button>
				</div>
				<div className="partc">
					{activeDialogData &&
						activeDialogData.category &&
						activeDialogData.category.map((cat, ind) => {
							return (
								<div>
									<Link to={cat.path} key={ind}>
										<IoMdArrowDropright /> <span>{cat.title}</span>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		navItems: state.main.navItems,
		activeNav: state.main.activeNav,
		activeHover: state.main.activeHover
	};
};

export default connect(mapStateToProps)(TopNav);
