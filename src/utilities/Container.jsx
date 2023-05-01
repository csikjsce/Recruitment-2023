const Container = ({ children, className, mobile, style, py, dir }) => {
	const direction = dir === "col" ? 'flex-col' : 'flex-row'
	const flex_gap = mobile ? 'gap-6' : ''
	const padding_x = mobile ? 'px-10' : 'px-24'
	const padding_y = mobile || py ? 'py-20' : ''
	const classes = `flex justify-between items-center w-screen min-h-screen !overflow-x-hidden ${flex_gap} ${padding_y} ${padding_x} ${className} ${direction}`
	return <div className={classes} style={style}>{children}</div>
}

export default Container
