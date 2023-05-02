import React, { useState, useEffect } from 'react'
import { Container, FlexCol, ScreenTitle } from '../utilities/exports'
import { useLocation } from 'react-router-dom'
import { JobDescription } from '../main/exports'

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

	return (
		<Container
			mobile={isMobile}
			py={true}
			className={`!justify-start !items-start ${isMobile ? "!px-6" : ""}`}>
			<FlexCol className='!items-start !gap-16'>
				<ScreenTitle
					title={data?.title}
					mobile={isMobile}
				/>
				<JobDescription data={data} route={parent_route} mobile={isMobile}/>
			</FlexCol>
		</Container>
	)
}

export default Apply