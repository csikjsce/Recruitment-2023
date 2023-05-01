import React, { useState, useEffect } from 'react'
import {
	Container,
	HeadsCard,
	MembersCard,
	Flex,
	FlexCol,
	PositionSubtitle,
	PositionSubtitleMobile,
	ScreenTitle,
} from '../utilities/exports'
import heads_data from '../data/positions/heads.json'
import members_data from '../data/positions/members.json'
import { useNavigate } from 'react-router-dom'

const FlexHeads = ({ isMobile }) => {
	const navigate = useNavigate()
	return (
		<FlexCol className='!items-start !justify-center'>
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
				gap={isMobile ? 'gap-0' : 'gap-10'}>
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

const FlexMembers = ({ isMobile }) => {
	const navigate = useNavigate()
	return (
		<FlexCol className='!items-start !justify-center'>
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
				gap={isMobile ? 'gap-0' : 'gap-10'}>
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
}

const Positions = () => {
	const [isMobile, setIsMobile] = useState(null)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 500) {
				setIsMobile(false)
			} else {
				setIsMobile(true)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<Container
				mobile={isMobile}
				py={true}
				className='!justify-center !items-center'>
				<FlexCol className='!items-start !gap-16'>
					<ScreenTitle
						title={isMobile ? 'Pick your team.' : 'Ready to join forces? Pick your team.'}
						mobile={isMobile}
					/>
					<FlexCol className='!items-start gap-24 pl-4'>
						<FlexHeads isMobile={isMobile} />
						<FlexMembers isMobile={isMobile} />
					</FlexCol>
				</FlexCol>
			</Container>
		</>
	)
}

export default Positions
