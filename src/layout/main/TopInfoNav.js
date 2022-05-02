import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { useSelector } from "react-redux";

function TopInfoNav() {
	const activeHover = useSelector((state) => state.main.activeHover);

	return (
		<div className={`public-layout-info-nav ${activeHover && "activeHover"}`}>
			<div className="public-layout-info-nav__left">
				<div className="public-layout-info-nav__left__item">
					<FaMobileAlt />
					<span>+977-9816177889</span>
				</div>
				<div className="public-layout-info-nav__left__item">
					<MdEmail />
					<span>vedalayatrading@gmail.com</span>
				</div>
				<div className="public-layout-info-nav__left__item">
					<IoMdLocate />
					<span>Town Planning, Sanothimi, Bhaktapur</span>
				</div>
			</div>
			<div className="public-layout-info-nav__right">
				<div className="public-layout-info-nav__right__item">
					<AiFillFacebook />
				</div>
				<div className="public-layout-info-nav__right__item">
					<AiFillInstagram />
				</div>
				<div className="public-layout-info-nav__right__item">
					<AiFillTwitterCircle />
				</div>
			</div>
		</div>
	);
}

export default TopInfoNav;
