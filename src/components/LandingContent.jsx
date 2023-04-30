import React from 'react'
import { FlexCol, LandingTitle, LandingSubtitle, LandingPara } from '../utilities/exports'

const LandingText = () => {
	return (
		<>
			<FlexCol className='!items-start !gap-10 !w-[50vw]'>
				<FlexCol className='!items-start'>
					<LandingTitle text='Empower' />
					<LandingSubtitle text='your career path' />
				</FlexCol>
				<FlexCol className='!items-start'>
					<LandingPara text='Step into the world of technology and embark on a journey of growth and learning, with a team that is passionate about pushing boundaries and making a difference. ' />
				</FlexCol>
			</FlexCol>
		</>
	)
}

export default LandingText
