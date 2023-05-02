import React from 'react'
import { Button } from '@mui/material'

const UploadInput = () => {
    const [uploaded, setUploaded] = React.useState(false)

    const handleChange = (event) => {
        setUploaded(true)
    }

	return (
		<>
			<div className='!w-full'>
				<label
					htmlFor='resume'
					className='relative'>
					<Button
						variant='raised'
						component='span'
						sx={{
							width: '100%',
							backgroundColor: '#75BAFF10',
							height: '50px',
							border: '1px solid #BFBFBF',
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: '200',
							color: '#656565',
                        }}>
                        {uploaded ? 'Resume Uploaded' : 'Upload your Resume'}
					</Button>
				</label>
				<input
					accept='application/pdf'
					style={{ display: 'none' }}
					id='resume'
                    multiple
                    onChange={handleChange}
                    disabled={uploaded}
					type='file'
				/>
			</div>
		</>
	)
}

export default UploadInput
