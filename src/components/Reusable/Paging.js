import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

function Paging(props) {
	const navigate = useNavigate();
	const location = useLocation();
	const queryString = location.search;
	const queryParams = new URLSearchParams(queryString);
	let start = parseInt(queryParams.get("start") || 0);
	let end = parseInt(queryParams.get("end") || 8);

	const indexQuotient = parseInt(start / (end - start));
	const [instancePerPage] = React.useState(end - start);
	const [activePageIndex, setActivePageIndex] = React.useState(indexQuotient);

	React.useEffect(() => {
		//if query is invalid
		const qnv = start % 8 !== 0 || end % 8 !== 0 || end < 8 || start < 0 || end - start > instancePerPage;

		if (qnv) {
			start = 0;
			end = 8;
			queryParams.set("start", 0);
			queryParams.set("end", 8);
			navigate({ pathname: location.pathname, search: queryParams.toString() });
		}
	}, []);

	const _pageNoClick = (pageIndex) => {
		setActivePageIndex(pageIndex);

		queryParams.set("page", pageIndex + 1);

		navigate({ pathname: location.pathname, search: queryParams.toString() });
	};

	const instanceCount = props.instanceCount;
	let noOfPages = Math.ceil(instanceCount / instancePerPage);

	if (activePageIndex >= noOfPages - 5) {
		var dynamicPageArr = [noOfPages - 5, noOfPages - 4, noOfPages - 3, noOfPages - 2];
	} else {
		var dynamicPageArr = [
			activePageIndex - 1,
			activePageIndex - 0,
			activePageIndex + 1, //active page number
			activePageIndex + 2,
			activePageIndex + 3
		];
	}

	return (
		<div className="table-bottom-pagination">
			<div className="table-bottom-pagination__pages">
				<div
					className={`table-bottom-pagination__pages__buttons table-bottom-pagination__pages__buttons--prev ${activePageIndex === 0 ? "table-bottom-pagination__pages__buttons--disabled" : ""}`}
					onClick={() => {
						if (activePageIndex === 0) {
							return;
						}
						_pageNoClick(activePageIndex - 1);
					}}
					disabled={activePageIndex === 0}
				>
					Previous
				</div>
				{noOfPages <= 8 ? (
					[1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => {
						if (el > noOfPages) return;
						return (
							<div
								className={`table-bottom-pagination__pages__buttons ${activePageIndex === el - 1 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
								disabled={noOfPages < el}
								key={index}
								active={activePageIndex === el - 1}
								onClick={() => _pageNoClick(el - 1)}
							>
								{el}
							</div>
						);
					})
				) : (
					<>
						{activePageIndex > 3 ? (
							<>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === 0 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									active={activePageIndex === 0}
									onClick={() => _pageNoClick(0)}
								>
									{1}
								</div>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === 1 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									active={activePageIndex === 1}
									onClick={() => _pageNoClick(1)}
								>
									{2}
								</div>
								<Pagination.Ellipsis disabled={true} />
							</>
						) : null}

						{(activePageIndex > 3 ? dynamicPageArr : [1, 2, 3, 4, 5]).map((el, index) => {
							return (
								<div className="table-bottom-pagination__pages__buttons" disabled={noOfPages < el} key={index} active={activePageIndex === el - 1} onClick={() => _pageNoClick(el - 1)}>
									{el}
								</div>
							);
						})}
						{noOfPages > 7 && activePageIndex < noOfPages - 5 ? <Pagination.Ellipsis disabled={true} /> : null}
						{noOfPages > 7 ? (
							<>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === noOfPages - 2 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									active={activePageIndex === noOfPages - 2}
									onClick={() => _pageNoClick(noOfPages - 2)}
								>
									{noOfPages - 1}
								</div>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === noOfPages - 1 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									active={activePageIndex === noOfPages - 1}
									onClick={() => _pageNoClick(noOfPages - 1)}
								>
									{noOfPages}
								</div>
							</>
						) : (
							<>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === 7 - 2 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									disabled={noOfPages < 6}
									active={activePageIndex === 7 - 2}
									onClick={() => _pageNoClick(7 - 2)}
								>
									{6}
								</div>
								<div
									className={`table-bottom-pagination__pages__buttons ${activePageIndex === 7 - 2 ? "table-bottom-pagination__pages__buttons--active" : ""}`}
									disabled={noOfPages < 7}
									active={activePageIndex === 7 - 1}
									onClick={() => _pageNoClick(7 - 1)}
								>
									{7}
								</div>
							</>
						)}
					</>
				)}

				<div
					className={`table-bottom-pagination__pages__buttons table-bottom-pagination__pages__buttons--next ${
						activePageIndex === noOfPages - 1 ? "table-bottom-pagination__pages__buttons--disabled" : ""
					}`}
					onClick={() => {
						if (activePageIndex === noOfPages - 1) {
							return;
						}
						_pageNoClick(activePageIndex + 1);
					}}
					disabled={activePageIndex === noOfPages - 1 || noOfPages === 0}
				>
					Next
				</div>
			</div>
		</div>
	);
}

export default Paging;
