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
import { getHomePageData } from "../api/homepage";
import { useDispatch, connect } from "react-redux";
import { setMenuData, setHomeData } from "../redux/actions/home";
import fireSpark from "../helpers/spark";
import { setNavItems } from "../redux/actions";
import CONSTANTS from "../globals/constant";

function Home({ homeData, menuData, ...rest }) {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	const setMenuItemsData = (mItems) => {
		let tempNavItems = [...rest.navItems];
		let currentNavItems = [...mItems];

		rest.navItems.forEach((elem, ind) => {
			let activeIndex = mItems.findIndex((ci) => ci.show_on === elem.identifier);
			if (activeIndex < 0) return;
			tempNavItems[ind].content.image = CONSTANTS.BASE_URL + currentNavItems[activeIndex].image;
			tempNavItems[ind].content.description = currentNavItems[activeIndex].quotation;
		});
		dispatch(setNavItems(tempNavItems));
	};

	const _getHomeData = (signal) => {
		getHomePageData("", signal)
			.then((res) => {
				if (res.response.ok) {
					res = res.json;
					setLoading(false);
					dispatch(setMenuData(res.menu_highlights));
					// set menu items
					setMenuItemsData(res.menu_highlights);
					delete res.menu_highlights;
					dispatch(setHomeData(res));
				}
			})
			.catch((err) => {
				fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();

		_getHomeData(controller.signals);

		return () => controller.abort();
	}, []);

	return (
		<div className="home">
			{/* cover section */}
			<CoverSection data={homeData.slider_contents} loading={loading} />
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
			<GallerySection data={homeData.product_category} loading={loading} />
			{/* our clients change to working areas */}
			<OurClients />
			<div className="main-separator">
				<div></div>
			</div>
			{/* parallex section */}
			<ParallexSection />
			{/* clients view section */}
			<ClientsView data={homeData.testimonials} loading={loading} />
			{/* add about us section */}
			<AboutCompanyInfo />
			{/* add blogs section */}
			{/* faqs */}
			<Faqs data={homeData.faqs} loading={loading} />
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
