import { Container, FlexCol, ScreenText } from '../utilities/exports'
import { FlexHeads, FlexMembers } from './exports'
import { forwardRef } from 'react'

const JobPostings = forwardRef(({ isMobile }, ref) => {
	return (
		<>
			<Container
				mobile={isMobile}
				py={true}
				ref={ref}
				className='!justify-center !items-center !py-24'>
				<FlexCol className='!items-start !gap-16 !pl-4'>
					<FlexCol className='!items-start gap-24'>
						<FlexHeads isMobile={isMobile} />
						<FlexMembers isMobile={isMobile} />
					</FlexCol>
				</FlexCol>
			</Container>
		</>
	)
})

export default JobPostings
