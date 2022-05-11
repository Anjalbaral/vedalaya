import * as Types from "../types";

const INITIAL_STATE = {
	menuOn: false,
	navItems: [
		{
			key: 1,
			path: "/aboutus",
			name: "About Us",
			content: {
				image: "https://i.pinimg.com/736x/7c/1c/80/7c1c806ea285f7f79c1ac560e06a07cf--interior-architecture-drawing-interior-rendering.jpg",
				description:
					"Vedalaya is a group of construction and construction materials trading companies that specialize in modern construction methods and materials. Vedalaya Construction Pvt. Ltd. and Vedalaya Trading Pvt. Ltd, are at the forefront of modern and innovative solutions in this field.",
				path: "/aboutus",
				header: "About us",
				category: [
					{
						title: "About us info A",
						path: "/products/itema",
						subcategory: [
							{
								title: "Subcat A",
								path: "/products/subitema"
							},
							{
								title: "Subcat A2",
								path: "/products/subitema2"
							}
						]
					},
					{
						title: "About us info B",
						path: "/products/itemb",
						subcategory: [
							{
								title: "Subcat B",
								path: "/products/subitemb"
							},
							{
								title: "Subcat B2",
								path: "/products/subitemb2"
							}
						]
					},
					{
						title: "About us info C",
						path: "/products/itemc",
						subcategory: [
							{
								title: "Subcat C",
								path: "/products/subitemc"
							},
							{
								title: "Subcat C2",
								path: "/products/subitemc2"
							}
						]
					}
				]
			}
		},
		{
			key: 2,
			path: "/portfolio",
			name: "Portfolio",
			content: {
				image: "https://i.pinimg.com/originals/a4/3c/15/a43c150fdcb6209cfab8931cbd180051.jpg",
				path: "/portfolio",
				description:
					"From Barcelona arrives the Spanish interior designer Alexander Guirado. Meet his studio and fantastic work! Entrepreneurs and full of know-how. This is how the Spanish interior designer Alexander Guirado’s team",
				header: "Portfolio",
				category: [
					{
						title: "Our Current Ongoing Projects",
						path: "/portfolio?type=ongoing",
						description: "We as a company are involved in multiple ongoing projects.You can regularly follow up our ongoing projects form here."
					},
					{
						title: "Our Upcoming Projects",
						path: "/portfolio?type=upcoming",
						description: "You can read about our upcoming projects form here."
					}
				]
			}
		},
		{
			key: 3,
			path: "/products",
			name: "Products",
			content: {
				image: "https://mickricereto.files.wordpress.com/2014/08/8_6-color.jpg",
				path: "/products",
				header: "Products",
				description:
					"Mid-Century Design is more than decoration and architecture. For many people, Mid-Century is all about lifestyle. If you are part of this group, you should meet the iconic work of",
				category: [
					{
						title: "Product A",
						path: "/products/itema",
						subcategory: [
							{
								title: "Subcat A",
								path: "/products/subitema"
							},
							{
								title: "Subcat A2",
								path: "/products/subitema2"
							},
							{
								title: "Subcat A3",
								path: "/products/subitema3"
							}
						]
					},
					{
						title: "Product B",
						path: "/products/itemb",
						subcategory: [
							{
								title: "Subcat B",
								path: "/products/subitemb"
							},
							{
								title: "Subcat B2",
								path: "/products/subitemb2"
							}
						]
					},
					{
						title: "Product C",
						path: "/products/itemc",
						subcategory: [
							{
								title: "Subcat C",
								path: "/products/subitemc"
							},
							{
								title: "Subcat C2",
								path: "/products/subitemc2"
							}
						]
					}
				]
			}
		},
		{
			key: 4,
			path: "/gallery",
			name: "Gallery",
			content: {
				image: "https://cdnb.artstation.com/p/assets/images/images/017/987/057/large/gaurang-trivedi-kitchen-interior-furniture.jpg?1558091330",
				header: "Gallery",
				path: "/gallery",
				description:
					"Design is an important topic for Spanish people. From fashion to architecture, they tend to have special attention to it. In this article find more about Spanish interior design through",
				category: [
					{
						title: "Image A",
						path: "/gallery",
						image: "https://thearchitectsdiary.com/wp-content/uploads/2018/11/Interior-Exterior.jpg"
					},
					{
						title: "Image B",
						path: "/gallery",
						image: "https://3.imimg.com/data3/MI/HM/MY-3631407/residential-interior-and-exterior-500x500.jpg"
					},
					{
						title: "Image C",
						path: "/gallery",
						image: "https://i0.wp.com/dk3dhomedesign.com/wp-content/uploads/2021/03/small-house-exterior-design-2.jpg?resize=696%2C522&ssl=1"
					},
					{
						title: "Image D",
						path: "/gallery",
						image: "http://cdn.home-designing.com/wp-content/uploads/2017/05/stone-and-charcoal-two-storey-house-design.jpg"
					}
				]
			}
		},
		{
			key: 5,
			path: "/contact",
			name: "Contact",
			content: {
				image: "https://cdnb.artstation.com/p/assets/images/images/017/347/671/medium/gaurang-trivedi-millwork-for-kitchen.jpg?1555593273",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				path: "/contact",
				header: "Contact",
				category: []
			}
		},
		{
			key: 6,
			path: "/blogs",
			name: "Blogs",
			content: []
		}
	],
	activeNav: "/",
	activeSlide: 1,
	activeHover: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.CHANGE_ACTIVE_HOVER:
			return { ...state, activeHover: action.payload };
		case Types.CHANGE_ACTIVE_SLIDE:
			return { ...state, activeSlide: action.payload };
		case Types.CHANGE_MENU_STATUS:
			return { ...state, menuOn: action.payload };
		case Types.CHANGE_ACTIVE_NAV:
			return { ...state, activeNav: action.payload };
		default:
			return { ...state };
	}
};
