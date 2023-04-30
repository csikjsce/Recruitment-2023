import React, { useState, useEffect } from 'react'
import { Container, ScreenTitle } from '../utilities/exports'

const Info = () => {
	const [isMobile, setIsMobile] = useState(null)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 500) {
				setIsMobile(false)
			} else {
				setIsMobile(true)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Container
			mobile={isMobile}
			py={true}
			className='!justify-start !items-start'>
			<ScreenTitle
				title='Information Page'
				mobile={isMobile}
			/>
		</Container>
	)
}

export default Info
