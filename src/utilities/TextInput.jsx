import React from 'react'
import { TextField } from '@mui/material'

const TextInput = ({ label, rows }) => {
	const multiline = rows ? true : false

	const [value, setValue] = React.useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
    }
    
	return (
		<>
			<TextField
				label={label}
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
