import React from 'react'
import { TextField } from '@mui/material'

const TextInput = ({ label, rows, placeholder }) => {
	const multiline = rows ? true : false

	const [value, setValue] = React.useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
    }
    
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
	)
}

export default TextInput
