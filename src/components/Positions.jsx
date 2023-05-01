import { Container, FlexCol, ScreenText } from '../utilities/exports'
import { FlexHeads, FlexMembers } from '../components/exports'

const Positions = ({ isMobile }) => {
	return (
		<>
			<Container
				mobile={isMobile}
				py={true}
				className='!justify-center !items-center'>
				<FlexCol className='!items-start !gap-16 !pl-4'>
					<ScreenText
						text={isMobile ? 'Pick your team.' : 'Ready to join forces? Pick your team.'}
						mobile={isMobile}
					/>
					<FlexCol className='!items-start gap-24'>
						<FlexHeads isMobile={isMobile} />
						<FlexMembers isMobile={isMobile} />
					</FlexCol>
				</FlexCol>
			</Container>
		</>
	)
}

export default Positions
