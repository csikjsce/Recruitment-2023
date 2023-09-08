import {
	MembersCard,
	Flex,
	FlexCol,
	PositionSubtitle,
	PositionSubtitleMobile,
} from '../utilities/exports'
import fyrep_data from '../data/positions/fyrep.json'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'

const FlexFYRep = memo(({ isMobile }) => {
	const navigate = useNavigate()
	return (
		<FlexCol className='!items-start !justify-center -space-y-4'>
			{!isMobile ? (
				<PositionSubtitle text='Learn and Grow as a FY Student' />
			) : (
				<PositionSubtitleMobile
					text='Learn and Grow'
					subtext='as a FY student'
				/>
			)}
			<Flex
				className='!justify-start'
				direction={isMobile ? 'col' : 'row'}
				gap={isMobile ? '-space-y-6' : 'gap-10'}>
				{fyrep_data.map((item, index) => {
					return (
						<MembersCard
							key={item.key}
							title={item.title}
							subtitle={item.subtitle}
							image={item.image}
							mobile={isMobile}
							onClick={() => {
								navigate('/apply', {
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

export default FlexFYRep
