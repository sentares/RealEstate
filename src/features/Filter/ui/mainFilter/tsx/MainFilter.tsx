import { RoutePath } from 'app/providers/router'
import { getFilterState } from 'entities/filter/model/selectors/getFilterState'
import { changeRealtyType } from 'entities/filter/model/slice/FilterSlice'
import { FilterModal } from 'features/Filter/modal'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FilterIcon } from 'shared/images'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink } from 'shared/ui/appLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { Input } from 'shared/ui/input/Input'
import cls from './MainFilter.module.scss'
import { getRealtyService } from 'entities/realty'

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

	const dispatch = useAppDispatch()

	const { cellType, realtyType } = useSelector(getFilterState)
	const realtyTypeEntries = Object.entries(realtyType)

	console.log(cellType)

	const realtyTypeArr = realtyTypeEntries.map(([key, value]) => ({
		key,
		active: value.active,
		name: value.name,
	}))

	function changeActiveType(id: number) {
		setActiveType(id)
	}

	function changeModalState() {
		setOpenFilterModal(!openFilterModal)
	}

	function handleClickRealtyType(key: string, isActive: boolean) {
		dispatch(changeRealtyType(key, isActive))
	}

	function handleShowRealty() {
		// dispatch(getRealtyService(null))
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
							{realtyTypeArr.length &&
								realtyTypeArr.map(item => (
									<Button
										key={item.key}
										className={cls.catButn}
										theme={
											item.active ? ButtonTheme.TONAL : ButtonTheme.OUTLINE
										}
										onClick={handleClickRealtyType.bind(
											null,
											item.key,
											item.active
										)}
									>
										{item.name}
									</Button>
								))}
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
					<div className={cls.actionBlock}>
						<Button className={cls.createButton} theme={ButtonTheme.TONAL}>
							Сдать/Продать
						</Button>
						<AppLink to={`${RoutePath.realties}`}>
							<Button className={cls.searchButton} onClick={handleShowRealty}>
								Показать
							</Button>
						</AppLink>
					</div>
				</motion.div>
			</div>
		</>
	)
}

export default MainFilter
