import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const SelectInput = ({ label, menu }) => {
	const [value, setValue] = React.useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
	}

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
					required>
					{menu.map((item, index) => (
						<MenuItem
							key={index}
							value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	)
}

export default SelectInput
