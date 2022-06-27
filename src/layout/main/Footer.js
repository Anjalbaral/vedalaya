import React from "react";
import bottomlogo from "../../assets/images/bottomlogo.png";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { ImMobile } from "react-icons/im";
import { useSelector } from "react-redux";
import { FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	const contacts = useSelector((state) => state.main.contactDetails);
	let contactNo = contacts && contacts.contact_number ? contacts.contact_number.split("+977").join("") : [];
	let filteredContactNo = contactNo.toString().replace(/-/g, "");

	return (
		<>
			<div className="footer">
				<div className="footer__left">
					<h4>GET IN TOUCH</h4>
					<div
						onClick={() => {
							if (contacts && contacts.facebook) {
								window.open(contacts.facebook, "_blank");
							}
						}}
						className="footer__left__item"
					>
						<span>{contacts && contacts.facebook ? contacts.facebook : "Facebook.com/vedalaya"}</span>
						<AiFillFacebook />
					</div>
					<div
						onClick={() => {
							if (contacts && contacts.linked_in) {
								window.open(contacts.linked_in, "_blank");
							}
						}}
						className="footer__left__item"
					>
						<span>{contacts && contacts.linked_in ? contacts.linked_in : "Linkedin.com/vedalaya"}</span>
						<AiFillLinkedin />
					</div>
					<div
						onClick={() => {
							if (contacts && contacts.instagram) {
								window.open(contacts.instagram, "_blank");
							}
						}}
						className="footer__left__item"
					>
						<span>{contacts && contacts.instagram ? contacts.instagram : "Instagram.com/vedalaya"}</span>
						<AiFillInstagram />
					</div>
					<div
						onClick={() => {
							if (contacts && contacts.instagram) {
								window.open(contacts.instagram, "_blank");
							}
						}}
						className="footer__left__item"
					>
						<span>{contacts && contacts.pinterest ? contacts.pinterest : "Pinterest.com/vedalaya"}</span>
						<FaPinterestSquare />
					</div>
				</div>
				<div className="footer__center">
					<img style={{ width: "200px", height: "190px" }} src={bottomlogo} />
				</div>
				<div className="footer__right">
					<h4>CONTACT US</h4>
					<div className="footer__right__item">
						<IoLocationSharp />
						<span>Nikoshera, Madhyapur Thimi</span>
					</div>
					<div className="footer__right__item">
						<ImMobile />
						<span>{filteredContactNo ? filteredContactNo : "-"}</span>
					</div>
					<div className="footer__right__item">
						<IoMailSharp />
						<span>{contacts && contacts.contact_email ? contacts.contact_email : ""}</span>
					</div>
					<div className="footer__right__item" style={{ width: "250px" }}>
						<Link to="/careers" className="btn btn-secondary-2" style={{ width: "100%" }}>
							Careers
						</Link>
					</div>
				</div>
			</div>
			<div className="copyright">&#169;vedalaya group, all rights reserved.</div>
		</>
	);
}

export default Footer;
