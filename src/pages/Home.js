import React from "react";
import CoverSection from "../components/HomeComponent/CoverSection";
import AboutUsSection from "../components/HomeComponent/AboutUsSection";
import OurServices from "../components/HomeComponent/OurServices";
import GallerySection from "../components/HomeComponent/GallerySection";

function Home() {
	return (
		<div className="home">
			{/* cover section */}
			<CoverSection />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* about vedalaya section */}
			<AboutUsSection />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* our service section */}
			<OurServices />
			{/* separator */}
			<div className="main-separator">
				<div></div>
			</div>
			{/* image gallery section */}
			<GallerySection />
			{/* parallex section */}
			{/* clients view section */}
		</div>
	);
}

export default Home;
