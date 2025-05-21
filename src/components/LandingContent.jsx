import React, { useState, useEffect } from 'react'
import { FlexCol, LandingTitle, LandingSubtitle, LandingPara, Button } from '../utilities/exports'

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
			<FlexCol className={`!items-start !gap-10 ${isMobile ? '!w-full' : '!w-1/2'}`}>
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
				<FlexCol className='!items-start !gap-6'>
					<LandingPara
						mobile={isMobile}
						text='Step into the world of technology and embark on a journey of growth and learning, with a team that is passionate about pushing boundaries and making a difference. '
					/>
					<LandingPara
						mobile={isMobile}
						text="Last date to apply: "
						bold="31st May, 11:59 PM IST"
					/>
				</FlexCol>
				<FlexCol className={`!items-start ${isMobile ? "!mt-2" : "!mt-8"}`}>
					<Button
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
