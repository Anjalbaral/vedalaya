import React from "react";
import CoverSection from "../components/HomeComponent/CoverSection";
import AboutUsSection from "../components/HomeComponent/AboutUsSection";
import OurServices from "../components/HomeComponent/OurServices";
import GallerySection from "../components/HomeComponent/GallerySection";
import ParallexSection from "../components/HomeComponent/ParallexSection";
import ClientsView from "../components/HomeComponent/ClientsView";
import avatarpng from "../assets/images/avatar.png";
import Faqs from "../components/HomeComponent/Faqs";
import OurClients from "../components/HomeComponent/OurClients";

const swiperData = [
	{
		id: 1,
		page: 1,
		title: "Ram Doe",
		thumbnail: "https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-male-paramedic-avatar-character-icon-vector-illustration-design.jpg?ver=6",
		description: "Accusamus At vero eos et et iusto odio praesentium dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores  excepturi et quas molestias sint"
	},
	{
		id: 2,
		page: 2,
		title: "John Bastola",
		thumbnail: "https://mpng.subpng.com/20180717/cz/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74010dd214.7783760115318026250566.jpg",
		description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint"
	},
	{
		id: 3,
		page: 3,
		title: "Shyam Smith",
		thumbnail: "https://basaschools.co.za/wp-content/uploads/2021/04/boy-avator.png",
		description: "Accusamus At vero eos et et iusto odio praesentium dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos excepturi dolores et quas molestias sint"
	},
	{
		id: 4,
		page: 4,
		title: "Kelvin Adhikari",
		thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uzwCvGhb2QKHRMvwqrIfXooecA0St0Ku9_lHZw4QnGMykpom59ZSug63FfYMZfFE0Dw&usqp=CAU",
		description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint"
	}
];

function Home() {
	return (
		<div className="home">
			{/* cover section */}
			<CoverSection />
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
			<GallerySection />
			{/* our clients change to working areas */}
			<OurClients />
			<div className="main-separator">
				<div></div>
			</div>
			{/* parallex section */}
			<ParallexSection />
			{/* clients view section */}
			<ClientsView slides={[...swiperData]} />
			{/* faqs */}
			{/* add about us section */}
			{/* add blogs section */}
			<Faqs />
		</div>
	);
}

export default Home;
