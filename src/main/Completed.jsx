import React from 'react'
import { DescriptionTitle, CardContainer } from '../utilities/exports'
import { Animation } from '../components/exports'
import animationData from '../data/animations/completed.json'

const Completed = ({ mobile }) => {
	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!items-start !px-8 !pb-0 !gap-0' : '!pb-0 !gap-0'}
				classFlex='!items-center !gap-0'
				mobile={mobile}>
				<DescriptionTitle
					text='Application Submitted'
					mobile={mobile}
				/>
				<Animation
					size={300}
					animationData={animationData}
				/>
			</CardContainer>
		</>
	)
}

export default Completed
