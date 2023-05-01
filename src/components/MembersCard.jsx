import {
	MembersCard,
	Flex,
	FlexCol,
	PositionSubtitle,
	PositionSubtitleMobile,
} from '../utilities/exports'
import members_data from '../data/positions/members.json'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'

const FlexMembers = memo(({ isMobile }) => {
	const navigate = useNavigate()
	return (
		<FlexCol className='!items-start !justify-center -space-y-4'>
			{!isMobile ? (
				<PositionSubtitle text='Flourish in a team as a SY Student' />
			) : (
				<PositionSubtitleMobile
					text='Flourish in a team'
					subtext='as a SY student'
				/>
			)}
			<Flex
				className='!justify-start'
				direction={isMobile ? 'col' : 'row'}
				gap={isMobile ? '-space-y-6' : 'gap-10'}>
				{members_data.map((item, index) => {
					return (
						<MembersCard
							key={item.key}
							title={item.title}
							subtitle={item.subtitle}
							image={item.image}
							mobile={isMobile}
							onClick={() => {
								navigate('/info', {
									state: { key: item.key },
								})
							}}
						/>
					)
				})}
			</Flex>
		</FlexCol>
	)
})

export default FlexMembers
