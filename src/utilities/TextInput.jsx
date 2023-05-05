import React from 'react'
import { TextField } from '@mui/material'

const TextInput = ({ label, rows, placeholder, onData }) => {
	const multiline = rows ? true : false

	const handleChange = (event) => {
		onData(event.target.value)
    }
    
	return (
		<>
			<TextField
				label={label}
				placeholder={placeholder}
				variant='outlined'
				multiline={multiline}
                rows={rows}
                onChange={handleChange}
				required
				fullWidth
			/>
		</>
	)
}

export default TextInput
