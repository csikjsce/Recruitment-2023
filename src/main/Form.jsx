import React from 'react'
import { DescriptionTitle, CardContainer } from '../utilities/exports'

const Form = ({ mobile }) => {
	return (
		<>
			<CardContainer
				form={true}
				mobile={mobile}>
				<DescriptionTitle
					text='Application Form'
					mobile={mobile}
				/>
			</CardContainer>
		</>
	)
}

export default Form
