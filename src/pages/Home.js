import React, { useState, useEffect } from "react";
import CoverSection from "../components/HomeComponent/CoverSection";
import AboutUsSection from "../components/HomeComponent/AboutUsSection";
import OurServices from "../components/HomeComponent/OurServices";
import GallerySection from "../components/HomeComponent/GallerySection";
import ParallexSection from "../components/HomeComponent/ParallexSection";
import ClientsView from "../components/HomeComponent/ClientsView";
import avatarpng from "../assets/images/avatar.png";
import Faqs from "../components/HomeComponent/Faqs";
import OurClients from "../components/HomeComponent/OurClients";
import AboutCompanyInfo from "../components/HomeComponent/AboutCompanyInfo";
import { connect } from "react-redux";

function Home({ homeData, menuData, ...rest }) {
	return (
		<div className="home">
			{/* cover section */}
			<CoverSection data={homeData.slider_contents} loading={rest.loading} />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* about vedalaya section,change to our expertise section*/}
			<AboutUsSection />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* our service section change to category based section*/}
			<OurServices />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* image gallery section */}
			<GallerySection data={homeData.product_category} loading={rest.loading} />
			{/* our clients change to working areas */}
			<OurClients />
			<div className="main-separator">
				<div></div>
			</div>
			{/* parallex section */}
			<ParallexSection />
			{/* clients view section */}
			<ClientsView data={homeData.testimonials} loading={rest.loading} />
			{/* add about us section */}
			<AboutCompanyInfo />
			{/* add blogs section */}
			{/* faqs */}
			<Faqs data={homeData.faqs} loading={rest.loading} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		homeData: state.home.HomeData,
		menuData: state.home.MenuData,
		navItems: state.main.navItems
	};
};

export default connect(mapStateToProps)(Home);
