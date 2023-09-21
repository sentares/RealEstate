import { getRealty } from 'entities/realty/selectors/getRealty'
import { useSelector } from 'react-redux'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import cls from './MainPage.module.scss'
import { DefCard } from 'features/RealtyCard'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import Switcher, { SwitcherTheme } from 'shared/ui/switcher/Switcher'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Select from 'shared/ui/select/Select'

interface Option {
	id: number | null
	name: string
}

const Main = () => {
	const data = useSelector(getRealty)

	const optionsCategory = [
		{ id: 1, name: 'Мебель' },
		{
			id: 2,
			name: 'Оборудование',
		},
		{
			id: 3,
			name: 'Вентиляция',
		},
	]

	const [clickedItem, setClickedItem] = useState<Option>({
		id: null,
		name: '',
	})

	const handleClickeItem = (item: Option) => {
		setClickedItem(item)
	}

	const handleClickRemoveItem = () => {
		setClickedItem({ id: null, name: '' })
	}

	return (
		<div className={cls.main}>
			<Button className={cls.butt}>hello</Button>
			<ThemeSwitcher className={cls.themeSwitch} />
			<div>
				<DefCard />
			</div>
			<Select
				placeholder='All types'
				className={cls.select}
				options={optionsCategory}
				handleClickeItem={handleClickeItem}
				handleClickRemoveItem={handleClickRemoveItem}
				clickedItem={clickedItem}
			/>
		</div>
	)
}

export default Main
