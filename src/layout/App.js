import React, { Suspense } from "react";
import Wrapper from "../hoc/Wrapper";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../hoc/ScrollToTop";
import { pubRoutes } from "../routes/pubRouters";
import PublicRoute from "../hoc/PublicRoute";
import Main from "./main/Main";

function App() {
	const PublicFlow = pubRoutes.map((data, index) => {
		return <Route path={data.path} exact={data.exact} key={index} element={<data.component />} />;
	});

	return (
		<Wrapper>
			<ScrollToTop>
				{/* public flow */}
				<Main>
					<Suspense fallback={<span>FUCK</span>}>
						<Routes>{PublicFlow}</Routes>
					</Suspense>
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
