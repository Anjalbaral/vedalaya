import React from "react";
import Modal from "react-bootstrap/Modal";

function FilterModal({ openmodal, toggleModal }) {
	return (
		<Modal size="lg" show={openmodal} onHide={toggleModal} aria-labelledby="filter-modal" className="mobile-modal">
			<Modal.Header>Product Filter</Modal.Header>
			<Modal.Body>
				<div className="filter-body">
					<span>Filter Body</span>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default FilterModal;
