const Container = ({ children, className, mobile }) => {
	const direction = mobile ? 'flex-col' : 'flex-row'
	const flex_gap = mobile ? 'gap-6' : ''
	const padding_x = mobile ? 'px-10' : 'px-24'
	const padding_top = mobile ? 'pt-20' : ''
	const classes = `flex justify-between items-center w-screen h-screen overflow-x-hidden pb-14 ${flex_gap} ${padding_top} ${padding_x} ${className} ${direction}`
	return <div className={classes}>{children}</div>
}

export default Container
