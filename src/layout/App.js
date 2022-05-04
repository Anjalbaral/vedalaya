import React, { Suspense, useEffect, useState } from "react";
import Wrapper from "../hoc/Wrapper";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../hoc/ScrollToTop";
import { pubRoutes } from "../routes/pubRouters";
import PublicRoute from "../hoc/PublicRoute";
import Main from "./main/Main";
import Loader from "../components/Reusable/Loader";
import { MdKeyboardArrowUp } from "react-icons/md";

function App() {
	const PublicFlow = pubRoutes.map((data, index) => {
		return <Route path={data.path} exact={data.exact} key={index} element={<data.component />} />;
	});

	const [scrollPosition, setScrollPosition] = useState(0);

	const _scrollToTop = () => {
		window.scrollTo(0, 0);
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

	console.log("window.pageYOffset", scrollPosition);

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

export default App;
