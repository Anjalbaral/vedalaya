import React from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdArrowRightAlt, MdArrowLeftA } from "react-icons/md";
import { changeActiveSlide } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function CoverRadioSwitch({ activeSlide, ...rest }) {
	const cover_sliders_radio = [
		{
			id: 1,
			title: "1"
		},
		{
			id: 2,
			title: "2"
		},
		{
			id: 3,
			title: "3"
		},
		{
			id: 4,
			title: "4"
		},
		{
			id: 5,
			title: "5"
		}
	];

	const dispatch = useDispatch();

	const _setCoverSlider = (data) => {
		dispatch(changeActiveSlide(data));
	};

	return (
		<div className="cover-switch">
			{/* <div className="cover-switch__left">
				<IoIosArrowRoundBack
					onClick={() => {
						if (activeSlide === 1) {
							_setCoverSlider(5);
						} else {
							_setCoverSlider(activeSlide - 1);
						}
					}}
				/>
			</div> */}
			{cover_sliders_radio.map((btn, index) => {
				return (
					<div
						key={index}
						onClick={() => {
							_setCoverSlider(btn.id);
						}}
						className={`cover-switch__btn ${activeSlide === btn.id ? "active" : ""}`}
					>
						{/* <span>{btn.title}</span> */}
					</div>
				);
			})}
			{/* <div className="cover-switch__right">
				<IoIosArrowRoundForward
					onClick={() => {
						if (activeSlide === 5) {
							_setCoverSlider(1);
						} else {
							_setCoverSlider(activeSlide + 1);
						}
					}}
				/>
			</div> */}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		activeSlide: state.main.activeSlide
	};
};

export default connect(mapStateToProps)(CoverRadioSwitch);
