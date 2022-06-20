import React, { Component } from "react";
import { BiError } from "react-icons/bi";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		console.log("error :( info :) - ", error, info);
		this.setState({ hasError: false });
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div className="public-body">
					<div className="error-boundary">
						<BiError />
						<h3>Sorry!! something went wrong</h3>
						<span>Brace yourself till we get the error fixed.</span>
						<span>You may also refresh the page or try again later</span>
					</div>
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
