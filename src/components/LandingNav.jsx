import React from 'react'
import { NavbarTitle, NavbarSubtitle, FlexRow } from '../utilities/exports'

const Navbar = ({ mobile }) => {
	const display = mobile ? 'hidden' : ''
	const classes = `!justify-between !py-3 !px-24 !fixed !top-0 !bg-[#F8F9FF] !z-50 border-b-[2px] ${display}`
	return (
		<>
			<FlexRow className={classes}>
				<FlexRow className='!items-start !justify-start !w-auto !gap-3'>
					<img
						src={require('../assets/csi-logo.png')}
						alt=''
						className='w-[auto] h-[30px]'
					/>
					<NavbarTitle text='CSI-KJSCE Recruitment' />
				</FlexRow>
				<NavbarSubtitle text='Last Date to Apply 31st May' />
			</FlexRow>
		</>
	)
}

export default Navbar
