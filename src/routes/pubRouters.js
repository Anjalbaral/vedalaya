import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Gallery = React.lazy(() => import("../pages/Gallery"));
const Products = React.lazy(() => import("../pages/Products"));
const AboutUs = React.lazy(() => import("../pages/AboutUs"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/NotFound"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const Portfolio = React.lazy(() => import("../pages/Portfolio"));
const WhyUs = React.lazy(() => import("../pages/WhyUs"));
const Expertise = React.lazy(() => import("../pages/Expertise"));
const Areas = React.lazy(() => import("../pages/Areas"));
const Services = React.lazy(() => import("../pages/Services"));

const pubRoutes = [
	{
		path: "/",
		exact: true,
		name: "Home",
		component: Home
	},
	{
		path: "/gallery",
		exact: true,
		name: "Gallery",
		component: Gallery
	},
	{
		path: "/products",
		exact: true,
		name: "Products",
		component: Products
	},
	{
		path: "/contact",
		exact: true,
		name: "Contact",
		component: Contact
	},
	{
		path: "/aboutus",
		exact: true,
		name: "About Us",
		component: AboutUs
	},
	{
		path: "/areas",
		exact: true,
		name: "Areas",
		component: Areas
	},
	{
		path: "/our-expertise",
		exact: true,
		name: "Our Expertise",
		component: Expertise
	},
	{
		path: "/whyus",
		exact: true,
		name: "Why Us",
		component: WhyUs
	},
	{
		path: "/services",
		exact: true,
		name: "Services",
		component: Services
	},
	{
		path: "/blogs",
		exact: true,
		name: "Blogs",
		component: Blogs
	},
	{
		path: "/portfolio",
		exact: true,
		name: "Portfolio",
		component: Portfolio
	},
	{
		path: "/404",
		exact: true,
		name: "404 Not Found",
		component: PageNotFound
	}
];

export { pubRoutes };
