import React from 'react'
import { FlexRow, ScreenText } from './exports'

const BackIcon = () => {
	return (
		<img
			src={'/assets/icons/back.svg'}
			alt={'back'}
			loading='lazy'
			className='cursor-pointer'
			style={{
				width: '22px',
				height: '24px',
			}}
			onClick={() => {
				window.history.back()
			}}
		/>
	)
}

const ScreenTitle = ({ title, className }) => {
	const classes = ' !justify-start w-screen gap-4 ' + className
	return (
		<FlexRow className={classes}>
			<BackIcon />
			<ScreenText
				text={title}
			/>
		</FlexRow>
	)
}

export default ScreenTitle
