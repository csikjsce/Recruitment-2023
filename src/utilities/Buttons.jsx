import React from 'react'
import { Link } from 'react-router-dom'

const LandingButton = ({ text, link, mobile }) => {
	const size = mobile ? '!text-base' : '!text-lg'
	const classes = `!bg-[#0085FF] !text-white !font-medium !px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300 ${size}`
	return (
		<>
			<Link href={link}>
				<a className={classes}>
					{text}
				</a>
			</Link>
		</>
	)
}

export { LandingButton }
