import React, { useEffect, useState } from 'react';
import { DescriptionTitle, CardContainer, FlexCol, TextInput, SelectInput, Button } from '../utilities/exports';
import formdata from '../data/form/form.json';
import attributes from '../data/form/attributes.json';
import { useData, useError } from '../hooks/exports';

const Form = ({ mobile, onState }) => {
	const { data, setData, initialData, updateData, preferences } = useData();
	const { error, validate } = useError();

	const [disabled, setDisabled] = useState(true);

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
							rows = {item?.key !== "resume" ? 4 : null}
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
