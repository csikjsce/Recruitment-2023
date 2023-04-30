import { FlexCol } from './Flex'

const LandingTitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[2.1rem]' : 'text-[3.6rem]'
	const classes = `tracking-wide font-semibold text-[#0085FF] leading-normal ${size}`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const LandingSubtitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[2.1rem]' : 'text-[3.6rem]'
	const classes = `tracking-wide font-normal text-[#1E293B] leading-none ${size}`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const LandingPara = ({ text, mobile }) => {
	const size = mobile ? 'text-[0.9rem]' : 'text-[1.2rem]'
	const classes = `font-normal text-[#2D2D2D] leading-relaxed ${size}`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const ModalTitle = ({ text }) => {
	return (
		<>
			<h1 className='text-[1.5rem] font-semibold text-[#2D2D2D] leading-relaxed'>{text}</h1>
		</>
	)
}

const ModalSubtitle = ({ text }) => {
	return (
		<>
			<h1 className='text-[1.1rem] font-normal text-[#2D2D2D] leading-relaxed'>{text}</h1>
		</>
	)
}

const CardTitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[1.2rem]' : 'text-[1.1rem]'
	const classes = `font-semibold text-[#101010] leading-relaxed ${size}`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const CardSubtitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[0.9rem]' : 'text-[0.75rem]'
	const classes = `font-normal text-[#1E293B] leading-relaxed ${size}`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const PositionSubtitle = ({ text }) => {
	const classes = `font-medium text-[#1E293B] leading-relaxed translate-x-4 text-[1.4rem]`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

const PositionSubtitleMobile = ({ text, subtext }) => {
	const classes_text = `font-medium text-[#1E293B] leading-relaxed translate-x-1 text-[1.45rem]`
	const classes_subtext = `font-normal text-[#1E293B] leading-relaxed translate-x-1 text-[0.9rem]`
	return (
		<>
			<FlexCol className='!items-start !justify-center'>
				<h1 className={classes_text}>{text}</h1>
				<h1 className={classes_subtext}>{subtext}</h1>
			</FlexCol>
		</>
	)
}

const ScreenText = ({ text }) => {
	const classes = `font-semibold text-[#2D2D2D] leading-relaxed text-[1.7rem]`
	return (
		<>
			<h1 className={classes}>{text}</h1>
		</>
	)
}

export {
	LandingTitle,
	LandingSubtitle,
	LandingPara,
	ModalTitle,
	ModalSubtitle,
	CardTitle,
	CardSubtitle,
	PositionSubtitle,
	PositionSubtitleMobile,
	ScreenText,
}
