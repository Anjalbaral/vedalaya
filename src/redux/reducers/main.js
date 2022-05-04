import * as Types from "../types";

const INITIAL_STATE = {
	menuOn: false,
	navItems: [
		{
			key: 1,
			path: "/",
			name: "Home",
			content: {
				image: "http://www.hotelqueenspark.com/wp-content/uploads/2021/07/Flex-room-vertical.png",
				description:
					"From Barcelona arrives the Spanish interior designer Alexander Guirado. Meet his studio and fantastic work! Entrepreneurs and full of know-how. This is how the Spanish interior designer Alexander Guirado’s team",
				header: "Home",
				category: [
					{
						title: "Category A",
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
						title: "Category B",
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
						title: "Category C",
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
			path: "/products",
			name: "Products",
			content: {
				image: "https://images.squarespace-cdn.com/content/v1/4fcf5c8684aef9ce6e0a44b0/1506410556266-KZFRRPPW10C24Y9SBOZ1/Job+Site+Visits+-+Interior+Design+Lessons+To+Learn",
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
							},
							{
								title: "Subcat A4",
								path: "/products/subitema4"
							},
							{
								title: "Subcat A5",
								path: "/products/subitema5"
							},
							{
								title: "Subcat A6",
								path: "/products/subitema6"
							},
							{
								title: "Subcat A7",
								path: "/products/subitema7"
							},
							{
								title: "Subcat A8",
								path: "/products/subitema8"
							},
							{
								title: "Subcat A9",
								path: "/products/subitema9"
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
			key: 3,
			path: "/gallery",
			name: "Gallery",
			content: {
				image: "https://chemphilaust.com.au/assets/uploads/2018/05/Lydia-Maskiell-Interior-Designer-Launceston_02-1400x2097.jpg",
				header: "Gallery",
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
			key: 4,
			path: "/contact",
			name: "Contact",
			content: {
				image: "https://chemphilaust.com.au/assets/uploads/2018/05/Lydia-Maskiell-Interior-Designer-Launceston_03-1400x2097.jpg",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				header: "Contact",
				category: []
			}
		},
		{
			key: 5,
			path: "/aboutus",

			name: "About Us",
			content: {
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9STuiJh4wnBP159NxSTTYaPrD4AUhLocVDQ&usqp=CAU",
				description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
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
		}
	],
	activeNav: "/",
	activeSlide: 5,
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
