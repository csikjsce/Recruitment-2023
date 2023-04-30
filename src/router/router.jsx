import React from 'react';
import { Landing, Info, Form, Positions } from '../screens/exports';

const routes = [
	{
		path: '/',
		element: <Landing />,
    },
    {
        path: '/positions',
        element: <Positions />,
    },
    {
        path: '/info',
        element: <Info />,
    }, 
    {
        path: '/apply',
        element: <Form />,
    }
]

export default routes;