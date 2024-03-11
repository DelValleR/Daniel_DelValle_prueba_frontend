// Cards.js
import React, { useState } from 'react';
import './Cards.css';

const Cards = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
	};

	const prevCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
	};

	return (
		<div className="cards-container">
			<div
				className="cards-wrapper"
				style={{ transform: `translateX(-${currentIndex * (100 / data.length)}%)` }}
			>
				{data.map((card, index) => (
					<div key={card.id} className="card">
						<img src={card.imgSrc} alt={card.title} />
						<h2>{card.title}</h2>
						<p>{card.content}</p>
					</div>
				))}
			</div>
			<button className="prev-button" onClick={prevCard}>
				Previous
			</button>
			<button className="next-button" onClick={nextCard}>
				Next
			</button>
		</div>
	);
};

export default Cards;
