import React, { useEffect, useState } from 'react';
import { DescriptionTitle, CardContainer, FlexCol, TextInput, SelectInput, Button } from '../utilities/exports';
import formdata from '../data/form/form.json';
import attributes from '../data/form/attributes.json';
import { useData, useError } from '../hooks/exports';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader = ({ loading }) => {
	return (
		<Backdrop
			sx={{ color: '#0085FF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loading}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
};

const Form = ({ mobile, onState }) => {
	const { data, setData, initialData, updateData, preferences } = useData();
	const { error, validate } = useError();

	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);

	const textfields1 = attributes.textfields1;
	const selectfields = attributes.selectfields;
	const textfields2 = attributes.textfields2;

	useEffect(() => {
		let values = Object.values(error);
		let flag = values.every((item) => item === false);
		setDisabled(!flag);
	}, [data]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		const url = process.env.REACT_APP_SHEETAPI;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					setData(initialData);
					onState('completed');
					setLoading(false);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<>
			<CardContainer
				form={true}
				className={mobile ? '!px-8' : ''}
				mobile={mobile}
			>
				<Loader loading={loading} />
				<DescriptionTitle
					text='Application Form'
					mobile={mobile}
				/>
				<FlexCol className='!gap-6 !w-full'>
					{textfields1.map((item, index) => (
						<TextInput
							key={index}
							label={item?.label}
							onData={(value) => {
								updateData(item?.key, value);
							}}
							onBlur={(value) => {
								validate(item?.key, value);
							}}
							error={typeof error?.[item?.key] === 'string' ? true : false}
							helpertext={error?.[item?.key]}
							display={data?.[item?.key]}
						/>
					))}
					{selectfields.map((item, index) => (
						<SelectInput
							key={index}
							label={item?.label}
							on={item?.menu !== 'preferences' ? true : data.year != '' ? true : false}
							menu={item?.menu === 'preferences' ? preferences : formdata?.[item?.menu]}
							onData={(value) => {
								updateData(item?.key, value);
							}}
							onBlur={(value) => {
								validate(item?.key, value);
							}}
							display={data?.[item?.key]}
						/>
					))}
					{textfields2.map((item, index) => (
						<TextInput
							key={index}
							label={item?.label}
							rows={item?.key !== 'resume' ? 4 : null}
							placeholder={item?.key !== 'resume' ? item?.label : 'Google Drive or Google Docs link'}
							onData={(value) => {
								updateData(item?.key, value);
							}}
							onBlur={(value) => {
								validate(item?.key, value);
							}}
							error={typeof error?.[item?.key] === 'string' ? true : false}
							helpertext={error?.[item?.key]}
							display={data?.[item?.key]}
						/>
					))}
					<Button
						text='Apply'
						className='!px-10 !mt-10'
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
