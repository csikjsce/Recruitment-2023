import React from 'react'
import { LandingContent } from '../components/exports'
import { Container } from '../utilities/exports'

const Landing = () => {
  const direction = 'flex'
	return (
		<>
			<Container className={direction}>
				<LandingContent />
			</Container>
		</>
	)
}

export default Landing
