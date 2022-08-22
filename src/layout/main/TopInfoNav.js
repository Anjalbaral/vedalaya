import React, { useEffect } from "react";
import { FaMobileAlt, FaPinterestSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoLogoWhatsapp } from "react-icons/io";

function TopInfoNav() {
	const activeHover = useSelector((state) => state.main.activeHover);
	const contacts = useSelector((state) => state.main.contactDetails);
	let contactNo = contacts && contacts.contact_number ? contacts.contact_number.split("+977").join("") : [];
	let filteredContactNo = contactNo.toString().replace(/-/g, "");

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
					<span>Nikoshera, Madhyapur Thimi</span>
				</div>
				<div className="public-layout-info-nav__left__item" id="google_translate_element"></div>
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
				<div className="public-layout-info-nav__right__item">
					<AiFillLinkedin
						onClick={() => {
							if (contacts && contacts.linked_in) {
								window.open(contacts.linked_in, "_blank");
							}
						}}
					/>
				</div>
				<div className="public-layout-info-nav__right__item">
					<FaPinterestSquare
						style={{ fontSize: "16px" }}
						onClick={() => {
							if (contacts && contacts.pinterest) {
								window.open(contacts.pinterest, "_blank");
							}
						}}
					/>
				</div>
				<div className="public-layout-info-nav__right__item">
					<IoLogoWhatsapp
						onClick={() => {
							if (contacts && contacts.contact_number) {
								window.open(`https://wa.me/${filteredContactNo}`, "_blank");
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default TopInfoNav;
