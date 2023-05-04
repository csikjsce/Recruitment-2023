import React, { memo, useState, useEffect } from 'react'
import { Container } from '../utilities/exports'
import { Animation } from '../components/exports'
import animationData from '../data/animations/preloader.json'

const Preloader = memo(() => {
	const [showPreloader, setShowPreloader] = useState(true)

	const styles = {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		zIndex: 1000,
		opacity: showPreloader ? 1 : 0,
		pointerEvents: showPreloader ? 'all' : 'none',
		transition: 'opacity 1s ease-in-out',
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowPreloader(false)
		}, 5000)

		return () => clearTimeout(timeoutId)
	}, [])

	useEffect(() => {
		const body = document.querySelector('body')
		if (showPreloader) {
			body.style.overflow = 'hidden'
		} else {
			body.style.overflow = 'auto'
		}
	}, [showPreloader])

	return (
		<>
			{showPreloader && (
				<Container
					className='flex justify-center items-center bg-[#efffff]'
					style={styles}>
					<Animation
						size={300}
						animationData={animationData}
					/>
				</Container>
			)}
		</>
	)
})

export default Preloader
