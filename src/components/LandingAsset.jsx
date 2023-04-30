import React from 'react'

const LandingAsset = () => {
	return (
		<>
			<img
				src={require('../assets/Wolf.svg').default}
				alt='landing-asset'
				className='!w-auto !h-[60vh] !object-contain'
			/>
			<img
				src={require('../assets/Wolf-BG.png')}
				alt='landing-asset'
				className='!absolute !top-24 !right-4 !w-auto !h-[85vh] !object-contain -z-10'
			/>
		</>
	)
}

export default LandingAsset
