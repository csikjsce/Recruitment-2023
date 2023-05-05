import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ label, rows, placeholder, onData, onBlur, display='', error=false, helpertext=null }) => {
	const multiline = rows ? true : false;

	const [value, setValue] = useState(display || '');

	useEffect(() => {
		setValue(display);
	}, [display]);

	const handleChange = (event) => {
		setValue(event.target.value);
		onData(event.target.value);
		onBlur(event.target.value);
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
				error={error}
				helperText={helpertext}
				required
				fullWidth
			/>
		</>
	);
};

export default TextInput;
