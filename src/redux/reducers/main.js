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
			path: "/our-expertise",
			name: "Expertise",
			content: {
				image: "https://i.pinimg.com/736x/7c/1c/80/7c1c806ea285f7f79c1ac560e06a07cf--interior-architecture-drawing-interior-rendering.jpg",
				description:
					"     Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. ",
				path: "/our-expertise",
				header: "Our Expertise",
				category: [
					{
						title: "Modern and Innovative Constructions Solutions",
						path: "/our-expertise",
						description: "It involves projects related to New construction,Restoration and rehabilitation,Adaptive reuse,Green building,Demolition etc."
					},
					{
						title: "Modern and Innovative UPVC Solutions",
						path: "/our-expertise",
						description:
							"UPVC is a versatile material that is ideal for use in a wide range of construction applications in Nepal.Its creative design, durability, and cost-effectiveness make it the perfect choice for both residential, commercial, and industrial projects."
					}
				]
			}
		},
		{
			key: 3,
			path: "/portfolio",
			name: "Portfolio",
			content: {
				image: "https://i.pinimg.com/originals/a4/3c/15/a43c150fdcb6209cfab8931cbd180051.jpg",
				path: "/portfolio",
				description: "Vedalaya group is involved in several ongoing,completed and upcoming construction & trading related projects.",
				header: "Portfolio",
				category: [
					{
						title: "Our Current Ongoing Projects",
						slug: "ongoing projects",
						path: "/portfolio?type=ongoing",
						description: "Vedalaya group as a company is involved in multiple ongoing projects.You can regularly follow up our ongoing projects form here."
					},
					{
						title: "Projects We Have Completed",
						slug: "completed projects",
						path: "/portfolio?type=completed",
						description: "Vedalaya group as a company has completed several challenging projects. You can learn more about our completed works from here."
					},
					{
						title: "Our Upcoming Projects",
						slug: "upcoming projects",
						path: "/portfolio?type=upcoming",
						description: "You can read about our upcoming projects form here."
					}
				]
			}
		},
		{
			key: 4,
			path: "/products",
			name: "Products",
			content: {
				image: "https://mickricereto.files.wordpress.com/2014/08/8_6-color.jpg",
				path: "/products",
				header: "Products",
				description:
					"We at Vedalaya Construction and Trading Company are proud to offer our clients a wide range of innovative and modern UPVC products, reinforcements, roofing options, hardware and many more. Our products are manufactured using high-quality materials and innovative technology, which makes them strong and durable. We also have a wide range of options for fitting and installation to ensure that each product is perfect for the individual client. Our commitment to quality and customer satisfaction makes us a benchmark for engineering precision and styling.",
				category: [
					{
						title: "UPVC windows and doors",
						path: "/products",
						subcategory: [
							{
								title: "Windows",
								path: "/products"
							},
							{
								title: "Doors",
								path: "/products"
							}
						]
					},
					{
						title: "UPVC roofing and cladding",
						path: "/products",
						subcategory: [
							{
								title: "UPVC Roofing",
								path: "/products"
							},
							{
								title: "Stone-coated Roofing",
								path: "/products"
							},
							{
								title: "MRI Plain Sheet",
								path: "/products"
							}
						]
					},
					{
						title: "UPVC flooring and decking",
						path: "/products",
						subcategory: []
					},
					{
						title: "UPVC hardware, tools and accessories",
						path: "/products",
						subcategory: [
							{
								title: "Po/PU foam Guns",
								path: "/products"
							},
							{
								title: "UPVC Reinforcement",
								path: "/products"
							},
							{
								title: "European Handle",
								path: "/products"
							},
							{
								title: "Door and Window Hinges",
								path: "/products"
							},
							{
								title: "Moon Lock",
								path: "/products"
							},
							{
								title: "Normal Lock",
								path: "/products"
							},
							{
								title: "Roller",
								path: "/products"
							},
							{
								title: "Construction Screws",
								path: "/products"
							},
							{
								title: "Clamset",
								path: "/products"
							},
							{
								title: "Grip screw",
								path: "/products"
							},
							{
								title: "Gutter Guards",
								path: "/products"
							},
							{
								title: "Single roller",
								path: "/products"
							},
							{
								title: "Net roller",
								path: "/products"
							}
						]
					},
					{
						title: "UPVC soffits and fascia",
						path: "/products",
						subcategory: []
					},
					{
						title: "UPVC partitions and wall panels",
						path: "/products",
						subcategory: []
					},
					{
						title: "Gutters and downspouts",
						path: "/products",
						subcategory: []
					},
					{
						title: "Pipes and fittings",
						path: "/products",
						subcategory: []
					},
					{
						title: "Electrical conduit",
						path: "/products",
						subcategory: []
					},
					{
						title: "UPVC scaffold tubing and finishes",
						path: "/products",
						subcategory: []
					}
				]
			}
		},
		{
			key: 5,
			path: "/areas",
			name: "Areas",
			content: {
				image: "https://i.pinimg.com/originals/a4/3c/15/a43c150fdcb6209cfab8931cbd180051.jpg",
				path: "/areas",
				description:
					"At Vedalaya Construction and Trading Company, we focus on construction and trading in a range of different areas. This includes the hotel industry, schools and colleges, office spaces, and residential buildings but not limited to those. We are always open to working with innovative start-ups, and we also are open to partnerships for real estate investments. Our construction and trading expertise ensures that each project is successfully completed and delivered on time. With our experience and knowledge, we provide a construction or trading service that is efficient, reliable, and of the highest quality.",
				header: "Areas",
				category: [
					{
						title: "Residential",
						path: "/areas"
					},
					{
						title: "Commercial",
						path: "/areas"
					},
					{
						title: "Hotel and Tourism",
						path: "/areas"
					},
					{
						title: "Education",
						path: "/areas"
					},
					{
						title: "Industrial",
						path: "/areas"
					},
					{
						title: "Real Estate",
						path: "/areas"
					},
					{
						title: "Rental Retails",
						path: "/areas"
					},
					{
						title: "Governmental",
						path: "/areas"
					},
					{
						title: "Infrastructure Projects",
						path: "/areas"
					}
				]
			}
		},
		// {
		// 	key: 5,
		// 	path: "/gallery",
		// 	name: "Gallery",
		// 	content: {
		// 		image: "https://cdnb.artstation.com/p/assets/images/images/017/987/057/large/gaurang-trivedi-kitchen-interior-furniture.jpg?1558091330",
		// 		header: "Gallery",
		// 		path: "/gallery",
		// 		description:
		// 			"Design is an important topic for Spanish people. From fashion to architecture, they tend to have special attention to it. In this article find more about Spanish interior design through",
		// 		category: [
		// 			{
		// 				title: "Image A",
		// 				path: "/gallery",
		// 				image: "https://thearchitectsdiary.com/wp-content/uploads/2018/11/Interior-Exterior.jpg"
		// 			},
		// 			{
		// 				title: "Image B",
		// 				path: "/gallery",
		// 				image: "https://3.imimg.com/data3/MI/HM/MY-3631407/residential-interior-and-exterior-500x500.jpg"
		// 			},
		// 			{
		// 				title: "Image C",
		// 				path: "/gallery",
		// 				image: "https://i0.wp.com/dk3dhomedesign.com/wp-content/uploads/2021/03/small-house-exterior-design-2.jpg?resize=696%2C522&ssl=1"
		// 			},
		// 			{
		// 				title: "Image D",
		// 				path: "/gallery",
		// 				image: "http://cdn.home-designing.com/wp-content/uploads/2017/05/stone-and-charcoal-two-storey-house-design.jpg"
		// 			}
		// 		]
		// 	}
		// },
		{
			key: 6,
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
			key: 7,
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
