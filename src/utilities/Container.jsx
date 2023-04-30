const Container = ({ children, className }) => {
	const classes = `justify-center items-center w-[80vw] h-screen ${className}`
	return <div className={classes}>{children}</div>
}

export default Container
