const Container = ({ children, className }) => {
	const classes = `justify-between items-center w-screen h-screen px-24 pr-32 ${className}`
	return <div className={classes}>{children}</div>
}

export default Container
