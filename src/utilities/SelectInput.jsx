import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectInput = ({ label, menu, onData, on, display = '' }) => {
	const [value, setValue] = useState(display || '');

	useEffect(() => {
		setValue(display);
	}, [display]);

	const handleChange = (event) => {
		setValue(event.target.value);
		onData(event.target.value);
	};

	return (
		<>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					label={label}
					value={value}
					onChange={handleChange}
					required
				>
					{on ? (
						menu.map((item, index) => (
							<MenuItem
								key={index}
								value={item}
							>
								{item}
							</MenuItem>
						))
					) : (
						<MenuItem value={''}>"Select Graduation Year First"</MenuItem>
					)}
				</Select>
			</FormControl>
		</>
	);
};

export default SelectInput;
