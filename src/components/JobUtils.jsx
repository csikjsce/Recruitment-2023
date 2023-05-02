import React from 'react'
import {
    FlexCol,
    DescriptionTitle,
    DescriptionFor,
    FlexRow,
    DescriptionSubtitle,
    DescriptionPara,
} from '../utilities/exports'


const JobTitle = ({ data, mobile }) => {
	return (
		<>
			<FlexRow className='!justify-between'>
				<DescriptionTitle
					text='Job Description'
					mobile={mobile}
				/>
				<DescriptionFor
					text={data?.for}
					mobile={mobile}
				/>
			</FlexRow>
		</>
	)
}

const JobPara = ({ data, mobile, keyname, title }) => {
	return (
		<>
			<FlexCol className='!items-start !gap-1'>
				<DescriptionSubtitle
					text={title}
					mobile={mobile}
				/>
				<DescriptionPara
					text={data?.[keyname]}
					mobile={mobile}
				/>
			</FlexCol>
		</>
	)
}

const JobList = ({ data, mobile, keyname, title }) => {
	return (
		<>
			<FlexCol className='!items-start'>
				<DescriptionSubtitle
					text={title}
					mobile={mobile}
				/>
				<ol className='!list-decimal !pl-4'>
					{data?.[keyname].map((item, index) => (
						<li key={index}>
							<DescriptionPara
								text={item}
								mobile={mobile}
							/>
						</li>
					))}
				</ol>
			</FlexCol>
		</>
	)
}

const JobOpenings = ({ data, mobile, route }) => {
	return (
		<>
			<FlexCol className='!items-start'>
				<DescriptionSubtitle
					text='No. of Openings'
					mobile={mobile}
				/>
				{route === 'heads' ? (
					<ul>
						<li>
							<DescriptionPara
								text={`${data?.title} : ${data?.openings[0]}`}
								mobile={mobile}
							/>
						</li>
						<li>
							<DescriptionPara
								text={`Joint ${data?.title} : ${data?.openings[1]}`}
								mobile={mobile}
							/>
						</li>
					</ul>
				) : (
					<DescriptionPara
						text={data?.openings}
						mobile={mobile}
					/>
				)}
			</FlexCol>
		</>
	)
}

export {
    JobTitle,
    JobPara,
    JobList,
    JobOpenings,
}