import React from "react";
import bottomlogo from "../../assets/images/bottomlogo.png";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { ImMobile } from "react-icons/im";

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="footer__left">
					<h4>GET IN TOUCH</h4>
					<div className="footer__left__item">
						<span>Facebook.com/vedalaya</span>
						<AiFillFacebook />
					</div>
					<div className="footer__left__item">
						<span>Instagram.com/vedalaya</span>
						<AiFillInstagram />
					</div>
					<div className="footer__left__item">
						<span>Twitter.com/vedalaya</span>
						<AiFillTwitterSquare />
					</div>
				</div>
				<div className="footer__center">
					<img src={bottomlogo} />
				</div>
				<div className="footer__right">
					<h4>CONTACT US</h4>
					<div className="footer__right__item">
						<IoLocationSharp />
						<span>Nikoshera, Madhyapur Thimi</span>
					</div>
					<div className="footer__right__item">
						<ImMobile />
						<span>+977-9851080988</span>
					</div>
					<div className="footer__right__item">
						<IoMailSharp />
						<span>vedalayatrading2021@gmail.com</span>
					</div>
				</div>
			</div>
			<div className="copyright">&#169;vedalaya group, all rights reserved.</div>
		</>
	);
}

export default Footer;
