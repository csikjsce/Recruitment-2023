import React, { useState, useEffect } from 'react'
import { Container, Flex, FlexCol, ScreenTitle } from '../utilities/exports'
import { useLocation } from 'react-router-dom'
import { Form, JobDescription } from '../main/exports'

const Apply = () => {
	const [isMobile, setIsMobile] = useState(null)
	const [data, setData] = useState(null)

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

	const location = useLocation()

	const parent_route = location.state.key.split('-')[0]
	const child_route = location.state.key.split('-')[1]

	useEffect(() => {
		import(`../data/info/${parent_route}/${child_route}.json`).then((jsondata) => {
			const data = jsondata.default
			setData(data)
		})
	}, [parent_route])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const padding = isMobile ? "" : "!px-20 !py-16"

	return (
		<Container
			mobile={isMobile}
			py={true}
			className={`${padding} ${isMobile ? '!px-6' : ''}`}>
			<FlexCol className='!items-start !gap-12 !w-full'>
				<ScreenTitle
					title={data?.title}
					mobile={isMobile}
				/>
				<Flex
					className='!justify-between !items-start !gap-4 !w-full'
					direction={isMobile ? 'col' : 'row'}>
					<JobDescription
						data={data}
						route={parent_route}
						mobile={isMobile}
					/>
					<Form mobile={isMobile} />
				</Flex>
			</FlexCol>
		</Container>
	)
}

export default Apply
