import React from 'react'
import { CardContainer, FlexCol } from '../utilities/exports'
import { JobList, JobPara, JobTitle, JobOpenings } from '../components/exports'

const JobDescription = ({ data, route, mobile }) => {
	return (
		<>
			<CardContainer
				desc={true}
				mobile={mobile}
				className={mobile ? '!px-6' : ''}>
				<JobTitle
					data={data}
					mobile={mobile}
				/>
				<FlexCol className='!gap-8'>
					<JobPara
						data={data}
						keyname='about'
						title='About the Post'
						mobile={mobile}
					/>
					<JobList
						data={data}
						keyname='responsibilities'
						title='Responsibilities'
						mobile={mobile}
					/>
					<JobList
						data={data}
						keyname='skills'
						title='Skills Required'
						mobile={mobile}
					/>
					<JobList
						data={data}
						keyname='perks'
						title='Perks'
						mobile={mobile}
					/>
					<JobList
						data={data}
						keyname='procedure'
						title='Selection Procedure'
						mobile={mobile}
					/>
					<JobOpenings
						data={data}
						route={route}
						mobile={mobile}
					/>
				</FlexCol>
			</CardContainer>
		</>
	)
}

export default JobDescription
