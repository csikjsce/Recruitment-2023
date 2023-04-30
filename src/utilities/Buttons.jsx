import React from 'react'
import { Link } from 'react-router-dom'

const LandingButton = ({ text, link }) => {
	return (
		<>
			<Link href={link}>
				<a className='!bg-[#0085FF] !text-white !font-medium !text-lg !px-10 !py-2 !rounded-lg !hover:!bg-[#FF7B7F] !transition-all !duration-300'>
					{text}
				</a>
			</Link>
		</>
	)
}

export { LandingButton }
