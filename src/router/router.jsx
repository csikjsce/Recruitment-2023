import React from 'react';
import { Landing, Apply, Preloader } from '../screens/exports';

const routes = [
	{
		path: '/',
		element: (
			<>
				<Preloader />
				<Landing />
			</>
		),
	},
	{
		path: '/apply',
		element: (
			<>
				<Preloader />
				<Apply />
			</>
		),
	},
]

export default routes;