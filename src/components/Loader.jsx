import React from 'react';
import { Backdrop } from '@mui/material';
import animationData from '../data/animations/preloader.json';
import { Animation } from './exports';

const Loader = ({loading}) => {
	return (
		<Backdrop
			sx={{ color: '#0085FF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loading}
		>
			<Animation
				size={250}
				animationData={animationData}
			/>
		</Backdrop>
	);
};

export default Loader;
