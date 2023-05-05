import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ label, rows, placeholder, onData, display='' }) => {
	const multiline = rows ? true : false;

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
			<TextField
				label={label}
				placeholder={placeholder}
				variant='outlined'
				multiline={multiline}
				rows={rows}
				value={value}
				onChange={handleChange}
				required
				fullWidth
			/>
		</>
	);
};

export default TextInput;
