import React from 'react';
import { Landing, Info, Form } from '../screens/exports';

const routes = [
	{
		path: '/',
		element: <Landing />,
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