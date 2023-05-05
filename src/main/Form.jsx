import React, { useState } from 'react';
import { DescriptionTitle, CardContainer, FlexCol, TextInput, SelectInput, Button } from '../utilities/exports';
import formdata from '../data/form/form.json';

const Form = ({ mobile, onState }) => {
	const initialData = {
		username: '',
		email: '',
		roll: '',
		phone: '',
		linkedin: '',
		branch: '',
		year: '',
		preference1: '',
		preference2: '',
		preference3: '',
		resume: '',
		q1: '',
		q2: '',
	};

	const [data, setData] = useState(initialData);
	const [disabled, setDisabled] = useState(true);

	const updateData = (key, value) => {
		setData((prev) => {
			return { ...prev, [key]: value };
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setData(initialData);
		onState('completed');
	};

	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!px-8' : ''}
				mobile={mobile}
			>
				<DescriptionTitle
					text='Application Form'
					mobile={mobile}
				/>
				<FlexCol className='!gap-6 !w-full'>
					<TextInput
						label='Full Name'
						onData={(value) => {
							updateData('username', value);
						}}
						display={data?.username}
					/>
					<TextInput
						label='Somaiya Email'
						onData={(value) => {
							updateData('email', value);
						}}
						display={data?.email}
					/>
					<TextInput
						label='Roll Number'
						onData={(value) => {
							updateData('roll', value);
						}}
						display={data?.roll}
					/>
					<TextInput
						label='Phone Number'
						onData={(value) => {
							updateData('phone', value);
						}}
						display={data?.phone}
					/>
					<TextInput
						label='LinkedIn Profile'
						onData={(value) => {
							updateData('linkedin', value);
						}}
						display={data?.linkedin}
					/>
					<SelectInput
						label='Branch'
						on={true}
						menu={formdata?.branch}
						onData={(value) => {
							updateData('branch', value);
						}}
						display={data?.branch}
					/>
					<SelectInput
						label='Graduation Year'
						on={true}
						menu={formdata?.year}
						onData={(value) => {
							updateData('year', value);
						}}
						display={data?.year}
					/>
					<SelectInput
						label='Preference 1'
						on={data.year != '' ? true : false}
						menu={formdata?.preference[data?.year || 2026]}
						onData={(value) => {
							updateData('preference1', value);
						}}
						display={data?.preference1}
					/>
					<SelectInput
						label='Preference 2'
						on={data.year != '' ? true : false}
						menu={formdata?.preference[data?.year || 2026]}
						onData={(value) => {
							updateData('preference2', value);
						}}
						display={data?.preference2}
					/>
					<SelectInput
						label='Preference 3'
						on={data.year != '' ? true : false}
						menu={formdata?.preference[data?.year || 2026]}
						onData={(value) => {
							updateData('preference3', value);
						}}
						display={data?.preference3}
					/>
					<TextInput
						label='Resume Drive Link'
						onData={(value) => {
							updateData('resume', value);
						}}
						display={data?.resume}
					/>
					<TextInput
						label='Why do you want to be a part of the CSI-KJSCE?'
						placeholder={mobile ? 'Why do you want to be a part of the CSI-KJSCE?' : null}
						rows='4'
						onData={(value) => {
							updateData('q1', value);
						}}
						display={data?.q1}
					/>
					<TextInput
						label='What makes you a strong candidate for the CSI-KJSCE?'
						placeholder={mobile ? 'What makes you a strong candidate for the CSI-KJSCE?' : null}
						rows='4'
						onData={(value) => {
							updateData('q2', value);
						}}
						display={data?.q2}
					/>
					<Button
						text='Submit Application'
						className='!px-6 !mt-10'
						onClick={handleSubmit}
						disabled={disabled}
						mobile={true}
					/>
				</FlexCol>
			</CardContainer>
		</>
	);
};

export default Form;
