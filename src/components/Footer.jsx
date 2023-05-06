import React from 'react';
import { PositionSubtitleMobile, FlexRow, PositionSubtitle } from '../utilities/exports';

const Footer = ({ mobile }) => {
	const display = !mobile ? '' : '';
	const classes = `!w-screen !justify-center !items-center !py-3 !px-10 !sticky !bottom-0 !z-50 border-t-[2px] ${display}`;
	return (
		<>
			<FlexRow className={classes}>
				<PositionSubtitleMobile
					className='!items-center'
					subtext='Made with 💖 by CSI-KJSCE'
				/>
			</FlexRow>
		</>
	);
};

export default Footer;
