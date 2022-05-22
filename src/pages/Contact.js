import React, { useEffect, useRef } from "react";
import map3 from "../assets/images/linebuildings.png";
import { MdPhone, MdMail, MdLocationCity } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";

function Contact() {
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
								<span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</span>
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
						<div className="name">
							<b>Name</b>
							<input type="text" name="name" placeholder="full name..." />
						</div>
						<div className="email">
							<b>Email</b>
							<input type="text" name="email" placeholder="valid email..." />
						</div>
						<div className="phone">
							<b>Phone</b>
							<input type="text" name="phone" placeholder="contact no..." />
						</div>
						<div className="message">
							<b>Message</b>
							<textarea type="text" name="message" className="message" placeholder="" />
						</div>
						<button className="btn-primary-outlined">Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
