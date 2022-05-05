import React, { useEffect, useState } from "react";
import NavItems from "./NavItem";
import { connect, useDispatch } from "react-redux";
import { changeActiveNav, changeMenuStatus, changeActiveHover } from "../../redux/actions";
import NavItem from "./NavItem";
import Logo from "../../assets/images/logo.png";
import { useLocation, Link } from "react-router-dom";
import { HiMenuAlt3, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineCategory } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLocate, IoIosArrowRoundForward } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function TopNav({ navItems, activeNav, activeHover }) {
	let location = useLocation();
	let dispatch = useDispatch();
	let navigate = useNavigate();

	const [insideDialog, setInsideDialog] = useState(false);
	const [activeDialogData, setActiveDialogData] = useState({});
	const [activeSubCat, setActiveSubCat] = useState(null);

	useEffect(() => {
		if (location.pathname) {
			dispatch(changeActiveNav(location.pathname));
		}
	}, [location.pathname]);

	const _onNavItemHover = (path, navdata) => {
		if (path === "/" || path === "/blogs") {
			return;
		}
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
		topnav.classList.remove("hevered");
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
		topnav.classList.remove("hevered");
		navdialog.classList.remove("nav-hover-active");
		dispatch(changeActiveHover(""));
	};

	const _closeNavDialog = () => {
		setInsideDialog(false);
		let navdialog = document.getElementById("navdialog");
		let topnav = document.getElementById("topnav");
		topnav.classList.remove("hoverOn");
		topnav.classList.remove("hevered");
		navdialog.classList.remove("nav-hover-active");
		dispatch(changeActiveHover(""));
	};

	const _expandCat = (ind) => {
		if (activeSubCat === ind) {
			setActiveSubCat(null);
		} else {
			setActiveSubCat(ind);
		}
	};

	// const _onNavClick = (item) => {
	// 	setInsideDialog(false);
	// 	let navdialog = document.getElementById("navdialog");
	// 	let topnav = document.getElementById("topnav");
	// 	topnav.classList.remove("hoverOn");
	// 	topnav.classList.remove("hevered");
	// 	navdialog.classList.remove("nav-hover-active");
	// 	dispatch(changeActiveHover(""));
	// };

	console.log("active item:", activeDialogData);

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
						{navItems &&
							navItems.map((itm, inx) => {
								let isActive = activeNav === itm.path;
								let isHovered = (activeDialogData.header && activeDialogData.header.toLowerCase()) === itm.name.toLowerCase();
								return <NavItem onMouseEnter={_onNavItemHover} isHovered={isHovered} onMouseLeave={_onNavItemUnHover} item={itm} key={inx} isActive={isActive} />;
							})}
						<div
							onClick={() => {
								dispatch(changeMenuStatus(true));
							}}
							className="public-layout-top-nav__right__ham"
						>
							<RiMenu3Fill />
						</div>
					</>
				</div>
			</div>
			{/* sub nav menu dialog */}
			<div id="navdialog" onMouseEnter={_onMouseEnterDialog} onMouseLeave={_onMouseLeaveDialog} className="nav-dialog">
				<div onClick={_closeNavDialog} className="nav-close">
					<IoCloseOutline />
				</div>
				<div className="parta">
					<div style={{ backgroundImage: `url(${activeDialogData.image})` }}></div>
				</div>
				<div className="partb">
					<h5>{activeDialogData.header}</h5>
					<span>{activeDialogData.description}</span>
					<button
						onClick={() => {
							navigate(activeDialogData.path);
						}}
						className="btn-primary rounded"
					>
						More
						<HiOutlineArrowNarrowRight />
					</button>
				</div>
				<div className="partc">
					{activeDialogData &&
						activeDialogData.header === "Products" &&
						activeDialogData.category &&
						activeDialogData.category.map((cat, ind) => {
							return (
								<div className="supcat">
									<span key={ind}>
										<MdOutlineCategory style={{ cursor: "pointer", color: "#f1c12d" }} onClick={() => _expandCat(ind)} />{" "}
										<span onClick={() => _expandCat(ind)} style={{ cursor: "pointer" }}>
											{cat.title}
										</span>
										<Link to={cat.path}>
											<HiOutlineArrowNarrowRight style={{ fontSize: "20px", marginLeft: "18px", color: "blue", marginTop: "-5px", cursor: "pointer" }} />
										</Link>
									</span>
									{activeSubCat === ind ? (
										<div className="subcategory">
											{cat.subcategory &&
												cat.subcategory.map((scat, ind2) => {
													return (
														<span>
															<Link to={scat.path} key={ind2}>
																<GrFormNextLink style={{ fontSize: "20px" }} /> <span>{scat.title}</span>
															</Link>
														</span>
													);
												})}
										</div>
									) : null}
								</div>
							);
						})}
					{activeDialogData && activeDialogData.header === "Gallery" ? (
						<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
							{activeDialogData.category &&
								activeDialogData.category.map((im, ind) => {
									return (
										<Link key={ind} to={im.path}>
											<img style={{ width: ind === 0 || ind === 3 ? "165px" : ind === 2 || ind === 1 ? "165px" : "0px", height: "150px", margin: "5px", borderRadius: "0px" }} src={`${im.image}`} />
										</Link>
									);
								})}
						</div>
					) : null}
					{activeDialogData && activeDialogData.header === "Contact" ? (
						<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
							<div className="contact-info">
								<span className="head">Contact info</span>
								<div className="info-item">
									<FaMobileAlt /> +977-9816177889
								</div>
								<div className="info-item">
									<MdEmail /> vedalayatrading@gmail.com
								</div>
								<div className="info-item">
									<IoMdLocate /> Town Planning, Sanothimi, Bhaktapur
								</div>
							</div>
							<div className="divider"></div>
							<div className="social-links">
								<span className="head">Social Links</span>
								<div className="info-item">
									<AiFillFacebook /> vedalayagroup
								</div>
								<div className="info-item">
									<AiFillTwitterSquare /> @vedalayagroup
								</div>
								<div className="info-item">
									<AiFillInstagram /> Vedalaya Group
								</div>
							</div>
						</div>
					) : null}
					{activeDialogData && activeDialogData.header === "About us" ? (
						<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
							<div className="aboutus">
								<div className="ourvision">
									<span className="head">Our Vision</span>
									<span className="body">
										is to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
										Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,{" "}
									</span>
								</div>
								<div className="whyus">
									<span className="head">Why Us</span>
									<span className="body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</span>
								</div>
							</div>
						</div>
					) : null}
					{activeDialogData && activeDialogData.header === "Portfolio" ? (
						<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
							<div className="aboutus">
								<div className="ourvision">
									<span className="head">Our Ongoing Projects</span>
									<br />
									<span className="body">We as a company are involved in multiple ongoing projects.You can regularly follow up our ongoing projects form here.</span>
									<br />
									<Link to="/portfolio?type=ongoing" style={{ padding: "10px 10px 10px 0px", marginTop: "20px", fontSize: "14px", fontWeight: "bold", color: "blue" }}>
										ongoing projects <IoIosArrowRoundForward />
									</Link>
								</div>
								<div className="whyus">
									<span className="head">Our Upcoming Projects</span>
									<br />
									<span className="body">We are involved in several exciting upcoming projects.You can read about our upcoming projects form here.</span>
									<br />
									<Link to="/portfolio?type=upcoming" style={{ padding: "10px 10px 10px 0px", marginTop: "20px", fontSize: "14px", fontWeight: "bold", color: "blue" }}>
										upcoming projects <IoIosArrowRoundForward />
									</Link>
								</div>
							</div>
						</div>
					) : null}
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
