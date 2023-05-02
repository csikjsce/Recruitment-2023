import React from 'react'
import { CardContainer } from '../utilities/exports'
import { JobList, JobPara, JobTitle, JobOpenings } from '../components/exports'

const JobDescription = ({ data, route, mobile }) => {
	return (
		<>
			<CardContainer>
				<JobTitle
					data={data}
					mobile={mobile}
				/>
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
			</CardContainer>
		</>
	)
}

export default JobDescription
