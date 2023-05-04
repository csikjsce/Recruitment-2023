import React from 'react'
import { DescriptionTitle, CardContainer } from '../utilities/exports'

const Completed = ({ mobile }) => {
	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!px-8' : ''}
				classFlex='!items-center'
				mobile={mobile}>
				<DescriptionTitle
					text='Application Submitted'
					mobile={mobile}
				/>
			</CardContainer>
		</>
	)
}

export default Completed
