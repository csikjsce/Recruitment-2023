import React, { memo, useState, useEffect } from 'react'
import { Container } from '../utilities/exports'
import Lottie from 'react-lottie'
import animationData from '../data/animations/animation.json'

const Animation = memo(({ size }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<Lottie
			options={defaultOptions}
			height={size}
			width={size}
		/>
	)
})

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
					<Animation size={150} />
				</Container>
			)}
		</>
	)
})

export default Preloader
