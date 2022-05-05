import React, { useState } from "react";
import { IoMdArrowDropright, IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const fqsns = [
	{
		id: 1,
		question: "Is your company licensed and/or insured ?",
		answer: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 2,
		question: "What type of training and certifications do you have ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 3,
		question: "How long does a typical construction project take ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 4,
		question: "How do you charge for projects ? By the hour, job, etc. ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
	},
	{
		id: 5,
		question: "Do you have your own crew or do you hire subcontractors ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ipsum dolor sit amet magna aliqua. Ut enim ad minim veniam"
	}
];

function Faqs() {
	const [activeFaq, setActiveFaq] = useState(null);

	const _setFaq = (id) => {
		if (id === activeFaq) {
			setActiveFaq(null);
		} else {
			setActiveFaq(id);
		}
	};

	return (
		<div className="home__faqs">
			<div className="home__faqs__header">FREQUENTLY ASKED QUESTIONS</div>
			<div className="underline-separator">
				<div className="line"></div>
				<div className="mid"></div>
				<div className="line2"></div>
			</div>
			<div className="home__faqs__body">
				{fqsns.map((fq, ind) => {
					let isActive = fq.id === activeFaq;
					console.log("activeFaq:", activeFaq, isActive);
					return (
						<div key={ind} className={`home__faqs__body__item`}>
							<div
								className="home__faqs__body__item__question"
								onClick={() => {
									_setFaq(fq.id);
								}}
							>
								<div>
									<IoMdArrowDropright /> <span>{fq.question}</span>
								</div>
								<IoIosAddCircle style={{ cursor: "pointer" }} />
							</div>
							<div className={`answer ${isActive && "active"}`}>{fq.answer}</div>
							<div className="separator"></div>
						</div>
					);
				})}
			</div>
			<div className="home__faqs__footer">
				<h4>Still have a Question ?</h4>
				<span>if yes, then you can submit your question through direct messaging. We'll respond to you withing 24 hours.</span>
				<Link to="/contact" className="btn-primary">
					Message Us
				</Link>
			</div>
		</div>
	);
}

export default Faqs;
