// RadioInput.js
import React from 'react';
import './RadioInput.css';

const RadioInput = ({ idPrefix, options, selectedOption, onChange }) => {
	return (
		<div className="radio-input">
			{options.map((option, index) => (
				<div key={index} className="radio-item">
					<input
						type="radio"
						id={`${idPrefix}-${index}`}
						name={idPrefix}
						value={option}
						checked={selectedOption === option}
						onChange={() => onChange(option)}
					/>
					<label htmlFor={`${idPrefix}-${index}`}>{option}</label>
				</div>
			))}
		</div>
	);
};

export default RadioInput;
