import React, { useState, useEffect } from 'react'
import { LandingContent, LandingAsset } from '../components/exports'
import { Container } from '../utilities/exports'

const Landing = () => {
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
		<>
			<Container mobile={isMobile} className={`${!isMobile ? "overflow-hidden" : ""}`}>
				<LandingContent />
				<LandingAsset mobile={isMobile} />
			</Container>
		</>
	)
}

export default Landing
