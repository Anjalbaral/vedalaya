import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { useSelector } from "react-redux";

function TopInfoNav() {
	const activeHover = useSelector((state) => state.main.activeHover);
	const contacts = useSelector((state) => state.main.contactDetails);

	return (
		<div className={`public-layout-info-nav ${activeHover && "activeHover"}`}>
			<div className="public-layout-info-nav__left">
				<div className="public-layout-info-nav__left__item">
					<FaMobileAlt />
					<span>{contacts && contacts.contact_number ? contacts.contact_number : ""}</span>
				</div>
				<div className="public-layout-info-nav__left__item">
					<MdEmail />
					<span>{contacts && contacts.contact_email ? contacts.contact_email : ""}</span>
				</div>
				<div className="public-layout-info-nav__left__item">
					<IoMdLocate />
					<span>Town Planning, Sanothimi, Bhaktapur</span>
				</div>
			</div>
			<div className="public-layout-info-nav__right">
				<div className="public-layout-info-nav__right__item">
					<AiFillFacebook
						onClick={() => {
							if (contacts && contacts.facebook) {
								window.open(contacts.facebook, "_blank");
							}
						}}
					/>
				</div>
				<div className="public-layout-info-nav__right__item">
					<AiFillInstagram
						onClick={() => {
							if (contacts && contacts.instagram) {
								window.open(contacts.instagram, "_blank");
							}
						}}
					/>
				</div>
				<div className="public-layout-info-nav__right__item">
					<AiFillTwitterCircle
						onClick={() => {
							if (contacts && contacts.twitter) {
								window.open(contacts.twitter, "_blank");
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default TopInfoNav;
