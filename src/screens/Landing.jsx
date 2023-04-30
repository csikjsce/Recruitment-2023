import React from 'react'
import { LandingContent, LandingAsset } from '../components/exports'
import { Container } from '../utilities/exports'

const Landing = () => {
  const direction = 'flex'
	return (
		<>
			<Container className={direction}>
        <LandingContent />
        <LandingAsset />
			</Container>
		</>
	)
}

export default Landing
