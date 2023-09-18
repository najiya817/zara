import React from "react";
import "./Card.css";

function MyCard() {
	return (
		<div>
			{/* function Card({ title, description, imageUrl }) { */}
			return (
			<div className="card">
				<img src={imageUrl} alt={title} className="card-image" />
				<div className="card-content">
					<h2 className="card-title">{title}</h2>
					<p className="card-description">{description}</p>
				</div>
			</div>
			);
		</div>
	);
}

export default MyCard;
