import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { changeMenuStatus, changeActiveNav } from "../../redux/actions";
import { IoMdClose } from "react-icons/io";
import { BiCaretRight } from "react-icons/bi";
import history from "../../helpers/history";

function Mobilenav({ navItems, menuOn, activeNav }) {
	let navClasses = ["mobile-nav", "close"];
	let navBodyClass = ["mobile-nav__body", "close"];

	if (menuOn) {
		navClasses = ["mobile-nav", "open"];
		navBodyClass = ["mobile-nav__body", "open"];
	}

	const dispatch = useDispatch();

	useEffect(() => {
		if (menuOn) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "scroll";
		}
	}, [menuOn]);

	return (
		<div className={`${navClasses.join(" ")}`}>
			<div className="mobile-nav__head">
				<div
					onClick={() => {
						dispatch(changeMenuStatus(false));
					}}
					className="mobile-nav__head__close"
				>
					<IoMdClose />
				</div>
			</div>
			<div className={`${navBodyClass.join(" ")}`}>
				<ul>
					{navItems.map((mnav, ind) => {
						return (
							<li>
								<Link
									to={mnav.path}
									onClick={() => {
										dispatch(changeActiveNav(mnav.path));
										// history.push(mnav.path);
										dispatch(changeMenuStatus(false));
									}}
									className={mnav.path === activeNav ? "active" : ""}
									key={ind}
								>
									<span>{mnav.name}</span>
									{mnav.path === activeNav ? <BiCaretRight className="active" /> : null}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="mobile-nav__footer"></div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		navItems: state.main.navItems,
		activeNav: state.main.activeNav,
		menuOn: state.main.menuOn
	};
};

export default connect(mapStateToProps)(Mobilenav);
