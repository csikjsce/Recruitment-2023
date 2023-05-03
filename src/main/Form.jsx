import React from 'react'
import {
	DescriptionTitle,
	CardContainer,
	FlexCol,
	TextInput,
	SelectInput,
	UploadInput,
	Button,
} from '../utilities/exports'
import data from '../data/form/form.json'

const Form = ({ mobile }) => {
	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? "!px-6" : ""}
				mobile={mobile}>
				<DescriptionTitle
					text='Application Form'
					mobile={mobile}
				/>
				<FlexCol className='!gap-6 !w-full'>
					<TextInput label='Full Name' />
					<TextInput label='Somaiya Email' />
					<TextInput label='Roll Number' />
					<TextInput label='Phone Number' />
					<TextInput label='LinkedIn Profile' />
					<SelectInput
						label='Branch'
						menu={data?.branch}
					/>
					<SelectInput
						label='Graduation Year'
						menu={data?.year}
					/>
					<SelectInput
						label='Preference 1'
						menu={data?.preference[2025]}
					/>
					<SelectInput
						label='Preference 2'
						menu={data?.preference[2025]}
					/>
					<SelectInput
						label='Preference 3'
						menu={data?.preference[2025]}
					/>
					<TextInput
						label='Why do you want to be a part of the CSI-KJSCE?'
						placeholder='Why do you want to be a part of the CSI-KJSCE?'
						rows='4'
					/>
					<TextInput
						label='What makes you a strong candidate for the CSI-KJSCE?'
						placeholder='What makes you a strong candidate for the CSI-KJSCE?'
						rows='4'
					/>
					<UploadInput />
					<Button
						text='Submit Application'
						className='!px-6 !mt-10'
						mobile={true}
					/>
				</FlexCol>
			</CardContainer>
		</>
	)
}

export default Form
