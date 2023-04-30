import React, { useState, useEffect } from 'react'
import { Container, HeadsCard, MembersCard, Flex, FlexCol } from '../utilities/exports'
import heads_data from '../data/positions/heads.json'
import members_data from '../data/positions/heads.json'

const FlexHeads = ({ isMobile }) => {
	return (
		<Flex
			className='!justify-start'
			direction={isMobile ? 'col' : 'row'}
			gap={isMobile ? 'gap-20' : ''}>
			{heads_data.map((item, index) => {
				return (
					<HeadsCard
						key={index}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						mobile={isMobile}
					/>
				)
			})}
		</Flex>
	)
}

const FlexMembers = ({ isMobile }) => {
	return (
		<Flex
			className='!justify-start'
			direction={isMobile ? 'col' : 'row'}
			gap={isMobile ? 'gap-20' : ''}>
			{members_data.map((item, index) => {
				return (
					<MembersCard
						key={index}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						mobile={isMobile}
					/>
				)
			})}
		</Flex>
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
				className={`!px-4 ${!isMobile ? 'overflow-hidden' : ''}`}>
				<FlexCol>
					<FlexHeads isMobile={isMobile} />
					<FlexMembers isMobile={isMobile} />
				</FlexCol>
			</Container>
		</>
	)
}

export default Positions
