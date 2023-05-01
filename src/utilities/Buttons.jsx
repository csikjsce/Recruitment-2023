const LandingButton = ({ text, mobile }) => {
	const size = mobile ? '!text-base' : '!text-lg'
	const classes = `!bg-[#0085FF] !text-white !font-medium !px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300 cursor-pointer ${size}`

	return (
		<>
			<a className={classes}>{text}</a>
		</>
	)
}

export { LandingButton }
