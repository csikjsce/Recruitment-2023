import React from 'react'
import { DescriptionTitle, CardContainer } from '../utilities/exports'

const Closed = ({mobile}) => {
	return (
		<>
			<CardContainer
				form={true}
                className={mobile ? '!items-start !px-8' : ''}
                classFlex="!items-center"
				mobile={mobile}>
				<DescriptionTitle
                    text='Application Closed'
					mobile={mobile}
				/>
			</CardContainer>
		</>
	)
}

export default Closed
