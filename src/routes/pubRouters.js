import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Gallery = React.lazy(() => import("../pages/Gallery"));
const Products = React.lazy(() => import("../pages/Products"));
const AboutUs = React.lazy(() => import("../pages/AboutUs"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/NotFound"));

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
		path: "/404",
		exact: true,
		name: "404 Not Found",
		component: PageNotFound
	}
];

export { pubRoutes };
