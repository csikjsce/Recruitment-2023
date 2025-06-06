import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader = ({loading}) => {
	return (
		<Backdrop
			sx={{ color: '#FFF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={loading}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default Loader;
