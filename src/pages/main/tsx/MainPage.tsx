import { getRealty } from 'entities/realty/selectors/getRealty'
import { useSelector } from 'react-redux'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import cls from './MainPage.module.scss'
import { DefCard } from 'features/RealtyCard'

const Main = () => {
	const data = useSelector(getRealty)

	return (
		<div className={cls.main}>
			<ThemeSwitcher className={cls.themeSwitch} />
			<div>
				<DefCard />
			</div>
		</div>
	)
}

export default Main
