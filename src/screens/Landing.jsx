import React, { useState, useEffect, useRef } from 'react'
import { LandingContent, LandingAsset, Positions } from '../components/exports'
import { Container, Flex } from '../utilities/exports'

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

	const contentRef = useRef(null);

	const handleClick = () => {
		contentRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}

	return (
		<>
			<Container
				dir='col'
				mobile={isMobile}>
				<Flex
					className='!justify-between !min-h-screen'
					direction={isMobile ? 'col' : 'row'}>
					<LandingContent onClick={handleClick} />
					<LandingAsset mobile={isMobile} />
				</Flex>
				<Positions
					ref={contentRef}
					isMobile={isMobile}
				/>
			</Container>
		</>
	)
}

export default Landing
