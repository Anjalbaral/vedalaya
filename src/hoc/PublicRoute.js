import React from "react";
import { Route, Navigate } from "react-router-dom";

function PublicRoute({ ...rest }) {
	return <Route path="/" element={<rest.component />} />;
}

export default PublicRoute;
