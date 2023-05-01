import { memo } from 'react'
import { FlexCol } from './Flex'
import { ModalTitle, ModalSubtitle, CardTitle, CardSubtitle } from './Typography'

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

const HeadsCard = memo(({ title, subtitle, image, mobile, onClick }) => {
	const size = mobile ? '!w-[70vw]' : '!w-[15vw]'
	const classes =
		'!items-start !justify-end bg-[#FCFEFE80] border-2 border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 hover:shadow-2xl shadow-xl gap-1 ' +
		size
	return (
		<>
			<div
				onClick={onClick}
				className='cursor-pointer'>
				<FlexCol className='hover:-translate-y-5'>
					<img
						src={image}
						alt='asset'
						loading='lazy'
						className='h-[165px] translate-y-16'
					/>
					<FlexCol className={classes}>
						<CardTitle text={title} />
						<CardSubtitle text={subtitle} />
					</FlexCol>
				</FlexCol>
			</div>
		</>
	)
})

const MembersCard = memo(({ title, subtitle, image, mobile, onClick }) => {
	const size = mobile ? '!w-[70vw]' : '!w-[15vw]'
	const classes =
		'!items-start !justify-end bg-[#FCFEFE80] border-2 border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 hover:shadow-2xl shadow-xl gap-1 ' +
		size
	return (
		<>
			<div
				onClick={onClick}
				className='cursor-pointer'>
				<FlexCol className='hover:-translate-y-5'>
					<img
						src={image}
						alt='asset'
						loading='lazy'
						className='h-[150px] translate-y-16'
					/>
					<FlexCol className={classes}>
						<CardTitle text={title} />
						<CardSubtitle text={subtitle} />
					</FlexCol>
				</FlexCol>
			</div>
		</>
	)
})

export { ModalCard, HeadsCard, MembersCard }
