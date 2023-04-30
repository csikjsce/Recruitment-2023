import { FlexCol } from './Flex'
import { ModalTitle, ModalSubtitle } from './Typography'

const ModalCard = ({ title, subtitle }) => {
	return (
		<div className='bg-[#FCFEFE] p-10 rounded-lg shadow-lg'>
			<FlexCol className='!items-start !justify-center !space-y-2'>
				<ModalTitle text={title} />
				<ModalSubtitle text={subtitle} />
			</FlexCol>
		</div>
	)
}

export { ModalCard }
