import React from 'react'
import { DescriptionTitle, CardContainer, DescriptionPara } from '../utilities/exports'
import { Animation } from '../components/exports'
import animationData from '../data/animations/closed.json'

const Closed = ({ mobile }) => {
	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!items-start !px-8 !pb-0 !gap-0' : '!pb-0 !gap-0'}
				classFlex='!items-center !gap-0'
				mobile={mobile}>
				<DescriptionTitle
					text='Application Closed'
					mobile={mobile}
				/>
				<Animation
					size={mobile ? 275 : 325}
					animationData={animationData}
				/>
			</CardContainer>
		</>
	)
}

export default Closed
