import React, { Suspense, useEffect, useState } from "react";
import Wrapper from "../hoc/Wrapper";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../hoc/ScrollToTop";
import { pubRoutes } from "../routes/pubRouters";
import PublicRoute from "../hoc/PublicRoute";
import Main from "./main/Main";
import Loader from "../components/Reusable/Loader";
import { MdKeyboardArrowUp } from "react-icons/md";
import { getCoverData } from "../api/cover";
import { setCoverData } from "../redux/actions";
import { getHomePageData } from "../api/homepage";
import { useDispatch, connect } from "react-redux";
import { setMenuData, setHomeData } from "../redux/actions/home";
import fireSpark from "../helpers/spark";
import { setNavItems, setContactDetailsAction } from "../redux/actions";
import CONSTANTS from "../globals/constant";
import { getProductCategories } from "../api/products";
import { getContactDetails } from "../api/others";

function App(props) {
	const dispatch = useDispatch();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [loading, setLoading] = useState(true);

	const PublicFlow = pubRoutes.map((data, index) => {
		return <Route path={data.path} exact={data.exact} key={index} element={<data.component loading={loading} {...props} />} />;
	});
	const [categoryLoaders, setCategoryLoader] = useState(true);
	const [categoryList, setCategoryList] = useState([]);

	const _getContactDetails = (query, signal) => {
		getContactDetails(query, signal)
			.then((res) => {
				if (res.response.ok) {
					dispatch(setContactDetailsAction(res.json.results && res.json.results[0] ? res.json.results[0] : {}));
				}
			})
			.catch((err) => {
				// error handling
			});
	};

	const _getProductCategories = (query, signal) => {
		setCategoryLoader(true);
		getProductCategories(query, signal)
			.then((res) => {
				if (res.response.ok) {
					setCategoryLoader(false);
					setCategoryList(
						res.json.results.map((ci) => {
							return { title: ci.name, path: `/products?category=${ci.id}`, subcategory: [] };
						})
					);
				} else {
					setCategoryLoader(false);
				}
			})
			.catch((err) => {
				setCategoryLoader(false);
				//  error handling
			});
	};

	const setMenuItemsData = (mItems) => {
		let tempNavItems = [...props.navItems];
		let currentNavItems = [...mItems];

		props.navItems.forEach((elem, ind) => {
			let activeIndex = mItems.findIndex((ci) => ci.show_on === elem.identifier);
			if (activeIndex < 0) return;
			tempNavItems[ind].content.image = CONSTANTS.BASE_URL + currentNavItems[activeIndex].image;
			tempNavItems[ind].content.description = currentNavItems[activeIndex].quotation;
		});

		let productsIndex = tempNavItems.findIndex((ci) => ci.identifier === "products");
		tempNavItems[productsIndex].content.category = categoryList;
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
				// fireSpark("error", err);
			});
	};

	useEffect(() => {
		const controller = new AbortController();

		_getProductCategories("/", controller.signal);

		return () => controller.abort();
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		if (!categoryLoaders) {
			_getHomeData(controller.signal);
		}

		return () => controller.abort();
	}, [categoryList]);

	useEffect(() => {
		const controller = new AbortController();
		_getContactDetails("/", controller.signal);
		return () => controller.abort();
	}, []);

	const _scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const _getCoverData = (query, signal) => {
		getCoverData(query, signal)
			.then((res) => {
				if (res.response.ok) {
					dispatch(setCoverData(res.json.results));
				}
			})
			.catch((err) => {
				//  error handling
			});
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		_getCoverData("", controller.signal);
		return () => controller.abort();
	}, []);

	return (
		<Wrapper>
			<ScrollToTop>
				{/* public flow */}
				<Main>
					<Suspense fallback={<Loader />}>
						<Routes>{PublicFlow}</Routes>
					</Suspense>
					{/* bounce button */}
					{scrollPosition > 1060 && (
						<div onClick={_scrollToTop} className="bouncebtn">
							<MdKeyboardArrowUp />
						</div>
					)}
				</Main>
				{/* dashboard flow */}
				{/* <Dashboard>
                    <Suspense fallback={null}>
                    <Switch>
                        {PrivateFlow}
                    </Switch>
                    </Suspense>
                </Dashboard> */}
			</ScrollToTop>
		</Wrapper>
	);
}

const mapStateToProps = (state) => {
	return {
		homeData: state.home.HomeData,
		menuData: state.home.MenuData,
		navItems: state.main.navItems,
		contactDetails: state.main.contactDetails
	};
};

export default connect(mapStateToProps)(App);
