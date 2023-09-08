import { Container, FlexCol } from '../utilities/exports'
import { FlexHeads, FlexMembers, FlexFYRep } from './exports'
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
						<FlexFYRep isMobile={isMobile} />
						<FlexMembers isMobile={isMobile} />
						<FlexHeads isMobile={isMobile} />
					</FlexCol>
				</FlexCol>
			</Container>
		</>
	)
})

export default JobPostings
