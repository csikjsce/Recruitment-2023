import React from 'react'

const LandingAsset = ({ mobile }) => {
	const size = mobile ? '!max-w-[95vw]' : '!max-w-[40vw]'
	const position = mobile ? '!bottom-0 !-left-10' : '!-top-14 !-right-32'
	const classes = `!absolute !object-contain -z-10 ${position} ${size}`
	return (
		<>
			<div className='relative'>
				<img
					src={require('../assets/Wolf.svg').default}
					alt='landing-asset'
					className='!w-auto !h-[60vh] !object-contain'
				/>
				<img
					src={require('../assets/Wolf-BG.png')}
					alt='landing-asset'
					className={classes}
				/>
			</div>
		</>
	)
}

export default LandingAsset
