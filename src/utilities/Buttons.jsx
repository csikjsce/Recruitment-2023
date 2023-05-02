const Button = ({ text, mobile, onClick, className }) => {
	const size = mobile ? '!text-[1rem] ' : '!text-lg '
	const classes = `!bg-[#0085FF] !text-white !font-medium px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300 cursor-pointer ${size} ${className}`
	return (
		<>
			<a
				onClick={onClick}
				className={classes}>
				{text}
			</a>
		</>
	)
}

export { Button }
