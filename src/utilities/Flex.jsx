const FlexRow = ({ className, children, style }) => {
	const classes = 'flex justify-center items-center w-full ' + className
	return (
		<div
			className={classes}
			style={style}>
			{children}
		</div>
	)
}

const FlexCol = ({ className, children, style }) => {
	const classes = 'flex flex-col justify-center items-center w-full ' + className
	return (
		<div
			className={classes}
			style={style}>
			{children}
		</div>
	)
}

export { FlexRow, FlexCol }
