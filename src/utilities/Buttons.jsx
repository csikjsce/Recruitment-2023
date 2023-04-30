import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingButton = ({ text, link, mobile }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(link)
	}

	const size = mobile ? '!text-base' : '!text-lg'
	const classes = `!bg-[#0085FF] !text-white !font-medium !px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300 cursor-pointer ${size}`
	
	return (
		<>
			<a className={classes} onClick={handleClick}>{text}</a>
		</>
	)
}

export { LandingButton }
