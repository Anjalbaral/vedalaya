import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiChevronsDown } from "react-icons/bi";

function Paging(props) {
	const navigate = useNavigate();
	const location = useLocation();
	const queryString = location.search;
	const [instancePerPage] = React.useState(10);
	const queryParams = new URLSearchParams(queryString);

	let paged = parseInt(queryParams.get("page") || 1);

	let totalViewedItems = paged === 1 ? (props.instanceCount < 10 ? props.instanceCount : 10) : parseInt((paged - 1) * instancePerPage) + parseInt(props.instanceCount % instancePerPage);

	let isPaginationDisabled = parseInt(totalViewedItems) >= parseInt(props.instanceCount);

	const [currentPage, setCurrentPage] = useState(paged);

	React.useEffect(() => {
		// check if url valid
		let ipv = paged === 0 || parseInt(paged) < 0;

		if (ipv) {
			paged = 1;
			queryParams.set("page", paged);
			navigate({ pathname: location.pathname, search: queryParams.toString() });
		}
	}, []);

	const _loadMore = (selectedPage) => {
		setCurrentPage(selectedPage);
		queryParams.set("page", selectedPage);
		navigate({ pathname: location.pathname, search: queryParams.toString() });
	};

	return (
		<div className="load-more" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<span>
				You've viewed {totalViewedItems} Out of {props.instanceCount} Items
			</span>
			<b
				className={`${isPaginationDisabled && "disabled"}`}
				onClick={() => {
					if (isPaginationDisabled) {
						return;
					}
					_loadMore(currentPage + 1);
				}}
			>
				<BiChevronsDown className="a" />
				Load More
				<BiChevronsDown className="b" />
			</b>
		</div>
	);
}

export default Paging;
