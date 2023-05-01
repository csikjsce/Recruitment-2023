import React from 'react';
import { NavbarTitle, NavbarSubtitle, FlexRow } from '../utilities/exports';

const Navbar = ({ mobile }) => {
    const display = mobile ? 'hidden' : '';
    const classes = `!justify-between !py-3 !px-24 !fixed !top-0 !bg-[#F8F9FF] !z-50 ${display}`
	return (
		<>
            <FlexRow className={classes}>
                <NavbarTitle text="CSI-KJSCE" />
                <NavbarSubtitle text="Recruitment 23-24 | Apply Now" />
            </FlexRow>
		</>
	)
}

export default Navbar
