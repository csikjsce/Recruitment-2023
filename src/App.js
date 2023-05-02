import './index.css'
import React, { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router/router.jsx'
import { Unsupported } from './components/exports'
import { Preloader } from './screens/exports'

function App() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 500 || window.innerWidth > 1200) {
				setShow(true)
			} else {
				setShow(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const router = createBrowserRouter(routes)

	return !show ? (
		<>
			<Preloader />
			<Unsupported
				title='Unsupported Screen Size'
				subtitle='Please use either a mobile or desktop device to view this site.'
			/>
		</>
	) : (
		<>
			<Preloader />
			<RouterProvider router={router}>
				<Preloader />
			</RouterProvider>
		</>
	)
}

export default App
