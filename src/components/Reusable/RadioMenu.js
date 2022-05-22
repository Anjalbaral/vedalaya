import React from "react";
import Accordion from "react-bootstrap/Accordion";

function RadioMenu({ active, options, header }) {
	return (
		<div className="accordion accordion-light" id="optional-filter-accordion">
			<Accordion defaultActiveKey="0" flush>
				<Accordion.Item eventKey="0" style={{ marginBottom: "1rem" }}>
					<Accordion.Header>{header}</Accordion.Header>
					<Accordion.Body>
						<ul className="list-unstyled">
							{options &&
								options.map((op, ind) => {
									let isActive = active === op.value;
									return (
										<li className="my-2 form-check" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} key={ind}>
											<span>
												<input className="form-check-input" type="checkbox" name={op.name} value={op.value} id={op.name} checked={isActive} onChange={() => {}} />
												<label className="form-check-label ms-2" htmlFor="price-0-500">
													{op.label}
												</label>
											</span>
											{op && op.colorcode && <div className="color-code" style={{ width: "15px", height: "15px", backgroundColor: op.colorcode, marginLeft: "15px" }}></div>}
										</li>
									);
								})}
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}

export default RadioMenu;
