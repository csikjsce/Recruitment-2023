import React, { useState, useEffect } from 'react'
import { FlexCol, LandingTitle, LandingSubtitle, LandingPara, LandingButton } from '../utilities/exports'

const LandingText = ({onClick}) => {
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
			<FlexCol className={`!items-start !gap-12 ${isMobile ? '!w-full' : '!w-1/2'}`}>
				<FlexCol className='!items-start'>
					<LandingTitle
						text='Empower'
						mobile={isMobile}
					/>
					<LandingSubtitle
						text='your career path'
						mobile={isMobile}
					/>
				</FlexCol>
				<FlexCol className='!items-start'>
					<LandingPara
						mobile={isMobile}
						text='Step into the world of technology and embark on a journey of growth and learning, with a team that is passionate about pushing boundaries and making a difference. '
					/>
				</FlexCol>
				<FlexCol className={`!items-start ${isMobile ? "!mt-6" : "!mt-10"}`}>
					<LandingButton
						text='Get Started'
						mobile={isMobile}
						onClick={onClick}
					/>
				</FlexCol>
			</FlexCol>
		</>
	)
}

export default LandingText
