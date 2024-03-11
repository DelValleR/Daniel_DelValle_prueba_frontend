// SelectInput.js
import React from 'react';
import './SelectInput.css';

const SelectInput = ({ options, value, onChange }) => {
	return (
		<div className="select-input">
			<select value={value} onChange={onChange}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectInput;
