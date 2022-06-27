import React from "react";

function CarrersWorkItem({ image, description, title }) {
	return (
		<div className="careers-work__item">
			<div className="careers-work__item__image">
				<img src={image} alt="" />
			</div>

			<div className="careers-work__item__details">
				<h4 className="careers-work__item__title">{`${title}`}</h4>
				<div className="careers-work__item__description">{description}</div>
			</div>
		</div>
	);
}

export default CarrersWorkItem;
