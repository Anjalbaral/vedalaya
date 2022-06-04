import React, { useEffect, useState } from "react";
import map3 from "../assets/images/linebuildings.png";
import { MdPhone, MdMail, MdLocationCity } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
import isEmpty from "../helpers/isEmpty";
import fireSpark from "../helpers/spark";
import { submitContactData } from "../api/contact";

const contactDataModal = {
	name: "",
	email: "",
	phone: "",
	message: ""
};

function Contact() {
	const [contactInfo, setContactInfo] = useState({ ...contactDataModal });
	const [errors, setErrors] = useState({});

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
			message: contactInfo.message
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

	return (
		<div className="connect-with-us-section">
			<div className="connect-with-us-section__body">
				<img src={map3} />
				<div className="connect-with-us-section__body__content">
					<div className="connect-with-us-section__body__content__A">
						<div className="connect-with-us-section__body__content__A__top">
							<div>
								<b>Message Us</b>
								<IoIosArrowRoundForward />
							</div>
						</div>
						<div className="connect-with-us-section__body__content__A__bottom">
							<div className="our-info">
								<span>If you are looking for a construction company that can provide you with the quality services you need at a price you can afford, contact us today.</span>
							</div>
							<div className="contact-details">
								<div className="phone">
									<span>(+977)9816177889</span>
									<MdPhone />
								</div>
								<div className="email">
									<span>vedalayatrading@gmail.com</span>
									<MdMail />
								</div>
								<div className="address">
									<span>Town Planning, Sanothimi, Bhaktapur</span>
									<MdLocationCity />
								</div>
								<div className="socials">
									<TiSocialLinkedin />
									<TiSocialInstagram />
									<TiSocialTwitter />
									<TiSocialFacebook className="facebook" />
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
