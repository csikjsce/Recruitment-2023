const LandingTitle = ({text}) => {
    return (
			<>
				<h1 className='text-[3.75rem] tracking-wide font-semibold text-[#0085FF] leading-normal'>
					{text}
				</h1>
			</>
		)
}

const LandingSubtitle = ({ text }) => {
	return (
		<>
			<h1 className='text-[3.75rem] tracking-wide font-normal text-[#1E293B] leading-none'>
				{text}
			</h1>
		</>
	)
}

const LandingPara = ({ text }) => {
	return (
		<>
			<h1 className='text-[1.2rem] font-normal text-[#2D2D2D] leading-relaxed'>{text}</h1>
		</>
	)
}

export { LandingTitle, LandingSubtitle, LandingPara }