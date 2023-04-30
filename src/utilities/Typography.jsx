const LandingTitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[2.1rem]' : 'text-[3.6rem]'
	const classes = `tracking-wide font-semibold text-[#0085FF] leading-normal ${size}`
    return (
			<>
				<h1 className={classes}>
					{text}
				</h1>
			</>
		)
}

const LandingSubtitle = ({ text, mobile }) => {
	const size = mobile ? 'text-[2.1rem]' : 'text-[3.6rem]'
	const classes = `tracking-wide font-normal text-[#1E293B] leading-none ${size}`
	return (
		<>
			<h1 className={classes}>
				{text}
			</h1>
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

export { LandingTitle, LandingSubtitle, LandingPara, ModalTitle, ModalSubtitle }