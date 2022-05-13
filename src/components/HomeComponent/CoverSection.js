import React from "react";
import History from "../../helpers/history";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Cover1 from "../../assets/images/cover1.png";
import Cover2 from "../../assets/images/cover2.jpg";
import Cover3 from "../../assets/images/cover3.jpg";
import Cover4 from "../../assets/images/cover4.jpg";
import Cover5 from "../../assets/images/cover5.jpg";
import CoverRadioSwitch from "../CoverRadioSwitch/CoverRadioSwitch";
import { changeActiveSlide } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Parallax } from "react-parallax";

function removeLastWord(str) {
	const lastIndexOfSpace = str.lastIndexOf(" ");

	if (lastIndexOfSpace === -1) {
		return str;
	}

	return str.substring(0, lastIndexOfSpace);
}

function CoverSection(props) {
	const sliders = [
		{
			id: 1,
			title: "1",
			image: "https://www.alpora.com/wp-content/uploads/2021/03/innovation-in-construction-2.jpg",
			content: {
				head: "Welcome to",
				title: "Modern and Innovative Constructions Solutions",
				brief: "Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. "
			}
		},
		{
			id: 2,
			title: "2",
			image: "http://www.zccindia.com/wp-content/uploads/2015/05/exterior-1003-big.jpg",
			content: {
				head: "Welcome to",
				title: "New Construction",
				brief:
					"It refers to projects focused on creating a new building from scratch. This often involves complex engineering and planning efforts to ensure that the final structure meets all necessary safety and building codes."
			}
		},
		{
			id: 3,
			title: "3",
			image: "https://kyimages.kyinbridges.com/what-does-rehabilitation-mean-in-construction-.jpg",
			content: {
				head: "Welcome to",
				title: "Restoration and Rehabilitation",
				brief:
					"These projects typically involve restoring an existing structure to its original condition or making changes to allow it to be used for a new purpose. For example, a historic building might be restored in order to preserve its architectural integrity, or an abandoned factory might be rehabilitated into a new office complex."
			}
		},
		{
			id: 4,
			title: "4",
			image: "https://previews.123rf.com/images/archman/archman1202/archman120200121/12558577-3d-%EA%B3%84%ED%9A%8D-%EB%8F%84%EB%A9%B4.jpg",
			content: {
				head: "Welcome to",
				title: "Adaptive Reuse",
				brief:
					"It is another type of construction project that involves repurposing an existing structure for a new use. This might involve something as simple as converting an old warehouse into apartments, or it could involve more drastic changes, such as turning a decommissioned power plant into a museum."
			}
		},
		{
			id: 5,
			title: "5",
			image: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/26173543/All-about-green-buildings-in-India-FB-1200x700-compressed.jpg",
			content: {
				head: "Welcome to",
				title: "Green building",
				brief:
					"It is another common type of construction project that focuses on creating structures that are environmentally friendly and sustainable. This might involve using recycled materials, incorporating renewable energy sources, or employing energy-efficient design features."
			}
		},
		{
			id: 6,
			title: "6",
			image: "https://i.pinimg.com/originals/9a/1e/bd/9a1ebd55cd5ad229529dc6655dff5f69.jpg",
			content: {
				head: "Welcome to",
				title: "Demolition Services",
				brief:
					"It involves tearing down an existing structure in order to make way for something new. This might be necessary when a building is no longer functional or safe, or it might simply be part of a larger development plan that involves rebuilding the area from scratch. Regardless of the reasons behind a demolition project, it is an important and often necessary stage in many construction projects."
			}
		},
		{
			id: 7,
			title: "7",
			image: "https://www.glasxperts.com/wp-content/uploads/2016/04/32.jpg",
			content: {
				head: "Welcome to",
				title: "Modern and Innovative UPVC Solutions",
				brief:
					"UPVC is a versatile material that is ideal for use in a wide range of construction applications in Nepal.Its creative design, durability, and cost-effectiveness make it the perfect choice for both residential, commercial, and industrial projects."
			}
		}
	];

	let activeCover = useSelector((state) => state.main.activeSlide);
	const dispatch = useDispatch();
	const _setCoverSlider = (activeid) => {
		dispatch(changeActiveSlide(activeid));
	};

	return (
		<Parallax
			className="cover-parent"
			style={{ minWidth: "100%" }}
			blur={{ min: -10, max: 10 }}
			strength={300}
			bgClassName="parallexComp"
			bgImageStyle={{ width: "100%" }}
			bgImage={sliders.filter((im, ind) => im.id === activeCover)[0].image}
		>
			<div className="home__cover-section">
				{/* <div className="home__cover-section__full-cover-img" style={{ backgroundImage: `url(${sliders.filter((im, ind) => im.id === activeCover)[0].image})` }}></div> */}
				{/* left arrow */}
				<div
					onClick={() => {
						if (activeCover === 1) {
							_setCoverSlider(7);
						} else {
							_setCoverSlider(activeCover - 1);
						}
					}}
					className="home__cover-section__left-arrow"
				>
					<IoIosArrowBack />
				</div>
				{/* cover section left body */}
				<div className="home__cover-section__left">
					{sliders.map((infos, index) => {
						return (
							<div key={index} className={`cover-info ${infos.id === activeCover ? "cover-info-active" : ""}`}>
								<div className="cover-info-head">
									<span className="highlight">Vedalaya Group</span>
									<span>expertize on</span>
								</div>

								<div className="cover-info-title">
									<span>{removeLastWord(infos.content.title)}</span>
									<span className="highlight">{infos.content.title.split(" ")[infos.content.title.split(" ").length - 1]}</span>
								</div>
								<div className="cover-info-divider"></div>
								<div className="cover-info-brief">{infos.content.brief}</div>
								<Link className="btn-primary" to="/products">
									Learn More
								</Link>
							</div>
						);
					})}
				</div>
				{/* cover section right body */}
				<div className="home__cover-section__right">
					<div className="home__cover-section__right__image">
						{sliders.map((immg, index) => {
							return <img key={index} className={`cover-img ${immg.id === activeCover ? "cover-active" : ""}`} src={immg.image} />;
						})}
					</div>
				</div>
				{/* cover section right arrow */}
				<div
					onClick={() => {
						if (activeCover === 7) {
							_setCoverSlider(1);
						} else {
							_setCoverSlider(activeCover + 1);
						}
					}}
					className="home__cover-section__right-arrow"
				>
					<IoIosArrowForward />
				</div>
				<div className="DotContainer">
					<span className="DotAnimation">
						<span className="Dot">.</span>
					</span>
				</div>

				{/* cover slider switch */}
				<CoverRadioSwitch />
			</div>
		</Parallax>
	);
}

export default CoverSection;
