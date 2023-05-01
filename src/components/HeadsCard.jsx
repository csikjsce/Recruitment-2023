import {
	HeadsCard,
	Flex,
	FlexCol,
	PositionSubtitle,
	PositionSubtitleMobile,
} from '../utilities/exports'
import heads_data from '../data/positions/heads.json'
import { useNavigate } from 'react-router-dom'

const FlexHeads = ({ isMobile }) => {
	const navigate = useNavigate()
	return (
		<FlexCol className='!items-start !justify-center -space-y-4'>
			{!isMobile ? (
				<PositionSubtitle text='Lead the pack as a TY Student' />
			) : (
				<PositionSubtitleMobile
					text='Lead the pack'
					subtext='as a TY student'
				/>
			)}
			<Flex
				className='!justify-start'
				direction={isMobile ? 'col' : 'row'}
				gap={isMobile ? '-space-y-6' : 'gap-10'}>
				{heads_data.map((item, index) => {
					return (
						<HeadsCard
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
}

export default FlexHeads;
