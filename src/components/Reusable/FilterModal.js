import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";

function FilterModal({ openmodal, toggleModal, ...props }) {
	return (
		<Modal size="lg" show={openmodal} onHide={toggleModal} aria-labelledby="filter-modal" className="mobile-modal">
			<Modal.Header style={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				Product Filter{" "}
				<IoClose
					style={{ fontSize: "20px", cursor: "pointer" }}
					onClick={() => {
						toggleModal();
					}}
				/>
			</Modal.Header>
			<Modal.Body style={{ overflowY: "scroll", maxHeight: "90vh" }}>{props.children}</Modal.Body>
		</Modal>
	);
}

export default FilterModal;
