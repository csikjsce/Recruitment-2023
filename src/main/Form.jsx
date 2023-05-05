import React, { useEffect, useState } from 'react';
import { DescriptionTitle, CardContainer, FlexCol, TextInput, SelectInput, Button } from '../utilities/exports';
import formdata from '../data/form/form.json';
import { useData, useError } from '../hooks/exports';

const Form = ({ mobile, onState }) => {
	const { data, setData, initialData, updateData, preferences } = useData();
	const { error, setError, validate } = useError();

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		let values = Object.values(error);
		console.log(values);
		let flag = values.every((item) => item === false);
		setDisabled(flag);
	}, [data]);

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
						onBlur={(value) => {
							validate('username', value);
						}}
						error={typeof error.username === 'string' ? true : false}
						helpertext={error.username}
						display={data?.username}
					/>
					<TextInput
						label='Somaiya Email'
						onData={(value) => {
							updateData('email', value);
						}}
						onBlur={(value) => {
							validate('email', value);
						}}
						error={typeof error.email === 'string' ? true : false}
						helpertext={error.email}
						display={data?.email}
					/>
					<TextInput
						label='Roll Number'
						onData={(value) => {
							updateData('roll', value);
						}}
						onBlur={(value) => {
							validate('roll', value);
						}}
						error={typeof error.roll === 'string' ? true : false}
						helpertext={error.roll}
						display={data?.roll}
					/>
					<TextInput
						label='Phone Number'
						onData={(value) => {
							updateData('phone', value);
						}}
						onBlur={(value) => {
							validate('phone', value);
						}}
						error={typeof error.phone === 'string' ? true : false}
						helpertext={error.phone}
						display={data?.phone}
					/>
					<TextInput
						label='LinkedIn Profile'
						onData={(value) => {
							updateData('linkedin', value);
						}}
						onBlur={(value) => {
							validate('linkedin', value);
						}}
						error={typeof error.linkedin === 'string' ? true : false}
						helpertext={error.linkedin}
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
						menu={preferences}
						onData={(value) => {
							updateData('preference1', value);
						}}
						display={data?.preference1}
					/>
					<SelectInput
						label='Preference 2'
						on={data.year != '' ? true : false}
						menu={preferences}
						onData={(value) => {
							updateData('preference2', value);
						}}
						display={data?.preference2}
					/>
					<SelectInput
						label='Preference 3'
						on={data.year != '' ? true : false}
						menu={preferences}
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
						onBlur={(value) => {
							validate('resume', value);
						}}
						error={typeof error.resume === 'string' ? true : false}
						helpertext={error.resume}
						display={data?.resume}
					/>
					<TextInput
						label='Why do you want to be a part of the CSI-KJSCE?'
						placeholder={mobile ? 'Why do you want to be a part of the CSI-KJSCE?' : null}
						rows='4'
						onData={(value) => {
							updateData('q1', value);
						}}
						onBlur={(value) => {
							validate('q1', value);
						}}
						error={typeof error.q1 === 'string' ? true : false}
						helpertext={error.q1}
						display={data?.q1}
					/>
					<TextInput
						label='What makes you a strong candidate for the CSI-KJSCE?'
						placeholder={mobile ? 'What makes you a strong candidate for the CSI-KJSCE?' : null}
						rows='4'
						onData={(value) => {
							updateData('q2', value);
						}}
						onBlur={(value) => {
							validate('q2', value);
						}}
						error={typeof error.q2 === 'string' ? true : false}
						helpertext={error.q2}
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
