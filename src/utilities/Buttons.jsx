const Button = ({ text, mobile, onClick, className, disabled }) => {
	const size = mobile ? '!text-[1rem] ' : '!text-lg '
	const off = disabled ? 'disabled:opacity-50' : ''
	const classes = `!bg-[#0085FF] !text-white !font-medium px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300 cursor-pointer ${off} ${size} ${className}`
	return (
		<>
			<button
				onClick={onClick}
				disabled={disabled}
				className={classes}
			>
				{text}
			</button>
		</>
	);
}

export { Button }
