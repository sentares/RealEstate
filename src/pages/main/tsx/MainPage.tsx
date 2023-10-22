import axios from 'axios'
import MainFilter from 'features/Filter/ui/tsx/MainFilter'
import { DefCard } from 'features/RealtyCard'
import SearchByMap from 'features/SearchMap/tsx/SearchCart'
import { useEffect } from 'react'
import AdBlock from 'shared/blocks/adBlock/AdBlock'
import NewsBlock from 'shared/blocks/newsBlock/NewsBlock'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import Advertising from 'widgets/Advertising/Advertising'
import cls from './MainPage.module.scss'

const Main = () => {
	const getData = async () => {
		const response = await axios.get(
			'https://realty-deal.onrender.com/real-estate'
		)
		console.log(response)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className={cls.main}>
			<MainFilter />
			<ThemeSwitcher />
			<Advertising />
			<SearchByMap />
			<div className={cls.lenta}>
				<div className={cls.cardAndNews}>
					<div className={cls.cardBlock}>
						<h2>Интересные предложения</h2>
						<div className={cls.cards}>
							<DefCard />
							<DefCard />
							<DefCard />
							<DefCard />
							<DefCard />
							<DefCard />
						</div>
					</div>
					<NewsBlock />
				</div>
				<AdBlock />
			</div>
		</div>
	)
}

export default Main
