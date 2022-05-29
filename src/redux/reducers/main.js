import * as Types from "../types";
import A from "../../assets/images/a.jpeg";
import B from "../../assets/images/b.jpeg";
import C from "../../assets/images/c.jpeg";
import D from "../../assets/images/d.jpeg";
import E from "../../assets/images/e.jpeg";
import F from "../../assets/images/f.jpeg";
import G from "../../assets/images/g.jpeg";

const INITIAL_STATE = {
	menuOn: false,
	navItems: [
		{
			key: 1,
			identifier: "about",
			path: "/aboutus",
			name: "About",
			content: {
				image: D,
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
			path: "/whyus",
			identifier: "why_us",
			name: "Why Us",
			content: {
				image: D,
				description:
					"We have a strong commitment to our customers and always work to provide the highest quality products and services. With a strong focus on quality and customer satisfaction, we have been able to carve a niche for ourselves in the industry.",
				path: "/whyus",
				header: "Why Us",
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
			key: 3,
			path: "/our-expertise",
			identifier: "expertise",
			name: "Expertise",
			content: {
				image: D,
				description:
					"Vedalaya Group has the expertise to handle all types of construction projects.Construction projects can take many different forms, depending on the needs and goals of the project. ",
				path: "/our-expertise",
				header: "Our Expertise",
				category: [
					{
						title: "Constructions Solutions",
						path: "/our-expertise",
						description: "It involves projects related to New construction,Restoration and rehabilitation,Adaptive reuse,Green building,Demolition etc."
					},
					{
						title: "UPVC Solutions",
						path: "/our-expertise",
						description:
							"UPVC is a versatile material that is ideal for use in a wide range of construction applications in Nepal.Its creative design, durability, and cost-effectiveness make it the perfect choice for both residential, commercial, and industrial projects."
					}
				]
			}
		},
		{
			key: 4,
			path: "/portfolio",
			identifier: "portfolio",
			name: "Portfolio",
			content: {
				image: D,
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
					}
				]
			}
		},
		{
			key: 5,
			path: "/products",
			name: "Products",
			identifier: "products",
			content: {
				image: D,
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
			key: 6,
			path: "/areas",
			name: "Areas",
			identifier: "areas",
			content: {
				image: D,
				path: "/areas",
				description:
					"At Vedalaya Construction and Trading Company, we focus on construction and trading in a range of different areas. This includes the hotel industry, schools and colleges, office spaces, and residential buildings but not limited to those. We are always open to working with innovative start-ups, and we also are open to partnerships for real estate investments. Our construction and trading expertise ensures that each project is successfully completed and delivered on time. With our experience and knowledge, we provide a construction or trading service that is efficient, reliable, and of the highest quality.",
				header: "Areas",
				category: [
					{
						title: "Residential areas",
						path: "/areas"
					},
					{
						title: "Commercial areas",
						path: "/areas"
					},
					{
						title: "Hotel and Tourism areas",
						path: "/areas"
					},
					{
						title: "Educational areas ",
						path: "/areas"
					},
					{
						title: "Industrial areas",
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
						title: "Governmental areas",
						path: "/areas"
					},
					{
						title: "Infrastructure Projects",
						path: "/areas"
					}
				]
			}
		},
		{
			key: 7,
			path: "/gallery",
			identifier: "gallery",
			name: "Gallery",
			content: {
				image: D,
				header: "Gallery",
				path: "/gallery",
				description: "Our image gallery includes images of memorable moments captured in several events associated with our company.",
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
			key: 8,
			path: "/contact",
			name: "Contact",
			identifier: "contact",
			content: {
				image: D,
				description: "If you are looking for a construction company that can provide you with the quality services you need at a price you can afford, contact us today.",
				path: "/contact",
				header: "Contact",
				category: []
			}
		},
		{
			key: 9,
			path: "/services",
			name: "Services",
			identifier: "services",
			content: {
				image: D,
				description:
					"Our construction company offers innovative design and construction management solutions for both interior and exterior construction projects. The construction company specializes in design and consultation, construction management, interior design, and general contracting. The trading company specializes in purchase and procurement of the goods and materials. We have a wide variety of construction materials that cater to every construction need.",
				path: "/services",
				header: "Services",
				category: [
					{
						title: "Project Management",
						path: "/services"
					},
					{
						title: "Design & Consultancy",
						path: "/services"
					},
					{
						title: "Design & Engineering",
						path: "/services"
					},
					{
						title: "Procurements & Materials Management",
						path: "/services"
					},
					{
						title: "Building Information Modeling(BIM)",
						path: "/services"
					},
					{
						title: "Contract Administration",
						path: "/services"
					},
					{
						title: "Cost Estimation",
						path: "/services"
					},
					{
						title: "Market Research & Analysis",
						path: "/services"
					},
					{
						title: "Quality Control & Safety",
						path: "/services"
					},
					{
						title: "Site Supervision & Safety Management",
						path: "/services"
					},
					{
						title: "Sustainability Consulting",
						path: "/services"
					},
					{
						title: "Finance & Insurance",
						path: "/services"
					},
					{
						title: "Startup Aid",
						path: "/services"
					}
				]
			}
		},
		{
			key: 10,
			path: "/blogs",
			name: "Blogs",
			identifier: "blogs",
			content: []
		}
	],
	activeNav: "/",
	activeSlide: 1,
	activeHover: "",
	coverData: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SET_COVER_DATA:
			return { ...state, coverData: action.payload };
		case Types.SET_NAV_ITEMS:
			return { ...state, navItems: action.payload };
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
