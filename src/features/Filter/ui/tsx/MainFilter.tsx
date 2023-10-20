import { FilterIcon } from 'shared/images'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './MainFilter.module.scss'
import { Input } from 'shared/ui/input/Input'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FilterModal } from 'features/Filter/modal'

const MainFilter = () => {
	const types = [
		{
			id: 1,
			title: 'Купить',
		},
		{
			id: 2,
			title: 'Снять',
		},
		{
			id: 3,
			title: 'Посуточно',
		},
		{
			id: 4,
			title: 'Новостройки',
		},
	]

	const [activeType, setActiveType] = useState(1)
	const [openFilterModal, setOpenFilterModal] = useState(false)

	function changeActiveType(id: number) {
		setActiveType(id)
	}

	function changeModalState() {
		setOpenFilterModal(!openFilterModal)
	}

	return (
		<>
			{openFilterModal && <FilterModal changeModalState={changeModalState} />}

			<div className={cls.MainFilter}>
				<motion.h1
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 2 }}
				>
					Продать и купить недвижимость в Кыргызстане
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className={cls.filterBlock}
				>
					<div className={cls.typeBlock}>
						{types.map(type => (
							<div
								key={type.id}
								className={
									type.id === activeType ? cls.activeTypeTittle : cls.typeTittle
								}
								onClick={changeActiveType.bind(null, type.id)}
							>
								{type.title}
							</div>
						))}
					</div>
					<div className={cls.sortBlock}>
						<div className={cls.firstCategory}>
							<Button className={cls.catButn}>Квартира</Button>
							<Button className={cls.catButn} theme={ButtonTheme.TONAL}>
								Дом
							</Button>
							<Button className={cls.catButn}>Коммерческая недвижимость</Button>
							<Button className={cls.catButn}>Участок</Button>
							<Button className={cls.catButn}>Дача</Button>
							<Button className={cls.catButn}>Гараж</Button>
							<Button className={cls.catButn}>Машиноместо</Button>
							<Button theme={ButtonTheme.TEXT} onClick={changeModalState}>
								<FilterIcon className={cls.filterIcon} />
							</Button>
						</div>
						<div className={cls.secondCategory}>
							<div className={cls.roomsCategory}>
								<p>Количество комнат</p>
								<div className={cls.numButtons}>
									<Button className={cls.num}>1</Button>
									<Button className={cls.num}>2</Button>
									<Button className={cls.num} theme={ButtonTheme.TONAL}>
										3
									</Button>
									<Button className={cls.num}>4</Button>
									<Button className={cls.num}>5</Button>
									<Button className={cls.num} style={{ padding: '6px 6px' }}>
										+6
									</Button>
								</div>
							</div>
							<div className={cls.roomsCategory}>
								<p>Стоимость</p>
								<div style={{ display: 'flex' }}>
									<Input before='От' className={cls.roomInput} />
									<Input before='До' className={cls.roomInputRight} />
								</div>
							</div>
							<div className={cls.roomsCategorySolo}>
								<Input
									placeholder='Адрес, ЖК или район'
									className={cls.address}
								/>
							</div>
							<div className={cls.roomsCategorySolo}>
								<div>
									<Button
										theme={ButtonTheme.ELEVANT}
										className={cls.choseInMap}
									>
										Обвести на карте
									</Button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	)
}

export default MainFilter
