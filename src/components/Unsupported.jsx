import React from 'react'
import { Container, ModalCard } from '../utilities/exports'

const Unsupported = ({ title, subtitle }) => {
	return (
		<Container className="!flex !flex-col !items-center !justify-center">
			<ModalCard title={title} subtitle={subtitle} />
		</Container>
	)
}

export default Unsupported
