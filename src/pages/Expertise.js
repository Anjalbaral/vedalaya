import React from "react";
import aboutuscover from "../assets/images/aboutuscover.jpg";
import { Parallax } from "react-parallax";
import { IoSettingsOutline } from "react-icons/io5";
import newconst from "../assets/images/newconst.jpeg";

const Expertise = () => {
	return (
		<div className="expertise">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={aboutuscover}
			>
				<div className="expertise__cover">
					<div className="expertise__cover__overlay"></div>
					<div className="expertise__cover__content">
						<h3>Our Expertise</h3>
						<span>fields we expertise on</span>
					</div>
				</div>
			</Parallax>
			{/* <div className="expertise__intro">
				<div className="expertise__intro__header">We Expertise On</div>
				<div className="separator"></div>
				<div className="expertise__intro__body">
					Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project.
				</div>
			</div> */}
			<div className="expertise__sectionA">
				<div className="expertise__sectionA__header">
					MODERN & INNOVATIVE <br />
					CONSTRUCTION SOLUTIONS
				</div>
				<div className="separator"></div>
				<div className="expertise__sectionA__sub-header">
					Vedalaya Group has the expertise to handle all types of construction projects. Construction projects can take many different forms, depending on the needs and goals of the project.{" "}
				</div>
				<div className="expertise__sectionA__items">
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">New construction</div>
							<div className="expertise__sectionA__items__item__content__body">
								It refers to projects focused on creating a new building from scratch. This often involves complex engineering and planning efforts to ensure that the final structure meets all
								necessary safety and building codes. Some examples of new construction projects include commercial buildings, housing complexes, or even entire cities.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Restoration and rehabilitation</div>
							<div className="expertise__sectionA__items__item__content__body">
								These projects typically involve restoring an existing structure to its original condition or making changes to allow it to be used for a new purpose. For example, a historic building
								might be restored in order to preserve its architectural integrity, or an abandoned factory might be rehabilitated into a new office complex.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Adaptive Reuse</div>
							<div className="expertise__sectionA__items__item__content__body">
								It is another type of construction project that involves repurposing an existing structure for a new use. This might involve something as simple as converting an old warehouse into
								apartments, or it could involve more drastic changes, such as turning a decommissioned power plant into a museum.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Green building</div>
							<div className="expertise__sectionA__items__item__content__body">
								It is another common type of construction project that focuses on creating structures that are environmentally friendly and sustainable. This might involve using recycled materials,
								incorporating renewable energy sources, or employing energy-efficient design features.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Demolition</div>
							<div className="expertise__sectionA__items__item__content__body">
								It involves tearing down an existing structure in order to make way for something new. This might be necessary when a building is no longer functional or safe, or it might simply be
								part of a larger development plan that involves rebuilding the area from scratch. Regardless of the reasons behind a demolition project, it is an important and often necessary stage in
								many construction projects.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="expertise__sectionA"></div>
		</div>
	);
};

export default Expertise;
