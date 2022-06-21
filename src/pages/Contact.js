import React, { useEffect, useState } from "react";
import map3 from "../assets/images/linebuildings.png";
import { MdPhone, MdMail, MdLocationCity } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
import isEmpty from "../helpers/isEmpty";
import fireSpark from "../helpers/spark";
import { submitContactData } from "../api/contact";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPinterestSquare } from "react-icons/fa";

const contactDataModal = {
	name: "",
	email: "",
	phone: "",
	message: ""
};

function Contact() {
	const [contactInfo, setContactInfo] = useState({ ...contactDataModal });
	const [errors, setErrors] = useState({});
	const { state } = useLocation();
	const contacts = useSelector((state) => state.main.contactDetails);

	const _formDataChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setErrors({ ...errors, [name]: "" });
		setContactInfo({ ...contactInfo, [name]: value });
	};

	const isEmailValid = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validateContactInfo = (data) => {
		const { name, email, phone, message } = data;
		let errors = {};
		if (isEmpty(name)) {
			errors.name = "Name cannot be empty!";
		}
		if (isEmpty(email)) {
			errors.email = "Email cannot be empty!";
		}
		if (!isEmailValid(email)) {
			errors.email = "Provide valid email";
		}
		if (isEmpty(phone)) {
			errors.phone = "Phone number cannot be empty!";
		}
		if (isEmpty(message)) {
			errors.message = "Message cannot be empty!";
		}

		let isValid = isEmpty(errors);
		return { isValid, errors };
	};

	const _submit = () => {
		const { isValid, errors } = validateContactInfo(contactInfo);
		if (!isValid) {
			setErrors(errors);
			fireSpark("error", "validation error!");
			return;
		}

		const requestJson = {
			name: contactInfo.name,
			contact: contactInfo.phone,
			email: contactInfo.email,
			message: contactInfo.message,
			for_product: state && state.productId ? state.productId : "",
			page: state && state.page ? state.page : "",
			query_type: state && state.fromProduct ? "product" : "contact"
		};

		submitContactData(requestJson, "")
			.then((res) => {
				if (res.response.ok) {
					setContactInfo({ ...contactDataModal });
					setErrors({});
					fireSpark("success", "Form submitted successfully!");
				} else {
					fireSpark("error", res.json.error);
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	const errorMsg = (msg) => {
		if (isEmpty(msg)) return;
		return <div style={{ width: "100%", fontSize: "14px", color: "red", fontStyle: "italic", marginLeft: "40px" }}>{msg}</div>;
	};

	let contactNo = contacts && contacts.contact_number ? contacts.contact_number.split("+977").join("") : [];
	let filteredContactNo = contactNo.toString().replace(/-/g, "");

	return (
		<div className="connect-with-us-section">
			<div className="connect-with-us-section__body">
				<img src={map3} />
				<div className="connect-with-us-section__body__content">
					<div className="connect-with-us-section__body__content__A">
						<div className="connect-with-us-section__body__content__A__top">
							{state === null ? (
								<div>
									<b>Message Us</b>
									<IoIosArrowRoundForward />
								</div>
							) : (
								<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", textAlign: "right" }}>
									<span style={{ opacity: 0.7 }}>Enquiry For:</span>
									<span>
										<b style={{ margin: "0px" }}>{state.productName ? state.productName : "Unknown"}</b>
									</span>
								</div>
							)}
						</div>
						<div className="connect-with-us-section__body__content__A__bottom">
							<div className="our-info">
								{state !== null ? null : (
									<span>If you are looking for a construction company that can provide you with the quality services you need at a price you can afford, contact us today.</span>
								)}
							</div>
							<div className="contact-details">
								<div className="phone">
									<span>{contacts && contacts.contact_number ? contacts.contact_number : ""}</span>
									<MdPhone />
								</div>
								<div className="email">
									<span>{contacts && contacts.contact_email ? contacts.contact_email : ""}</span>
									<MdMail />
								</div>
								<div className="address">
									<span>Nikoshera, Madhyapur Thimi</span>
									<MdLocationCity />
								</div>
								<div className="socials">
									<FaPinterestSquare
										onClick={() => {
											if (contacts && contacts.pinterest) {
												window.open(contacts.pinterest, "_blank");
											}
										}}
									/>
									<TiSocialLinkedin
										onClick={() => {
											if (contacts && contacts.linked_in) {
												window.open(contacts.linked_in, "_blank");
											}
										}}
									/>
									<TiSocialInstagram
										onClick={() => {
											if (contacts && contacts.instagram) {
												window.open(contacts.instagram, "_blank");
											}
										}}
									/>
									<IoLogoWhatsapp
										onClick={() => {
											if (contacts && contacts.contact_number) {
												window.open(`https://wa.me/${filteredContactNo}`, "_blank");
											}
										}}
									/>
									<TiSocialFacebook
										onClick={() => {
											if (contacts && contacts.facebook) {
												window.open(contacts.facebook, "_blank");
											}
										}}
										className="facebook"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="connect-with-us-section__body__content__B">
						<div className={`name ${!isEmpty(errors.name) && "error-field"}`}>
							<b>Name</b>
							<input type="text" name="name" placeholder="full name..." value={contactInfo.name} onChange={_formDataChange} />
						</div>
						<div className={`email ${!isEmpty(errors.email) && "error-field"}`}>
							<b>Email</b>
							<input type="text" name="email" placeholder="valid email..." value={contactInfo.email} onChange={_formDataChange} />
						</div>
						<div className={`phone ${!isEmpty(errors.phone) && "error-field"}`}>
							<b>Phone</b>
							<input type="text" name="phone" placeholder="phone number..." value={contactInfo.phone} onChange={_formDataChange} />
						</div>
						<div className={`message ${!isEmpty(errors.message) && "error-field"}`}>
							<b>Message</b>
							<textarea type="text" name="message" className="message" placeholder="" value={contactInfo.message} onChange={_formDataChange} />
						</div>
						<button className="btn-primary-outlined" onClick={_submit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
