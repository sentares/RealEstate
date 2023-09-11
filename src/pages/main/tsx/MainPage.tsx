import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'shared/switchers/language-switcher/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import Switcher, { SwitcherTheme } from 'shared/ui/switcher/Switcher'
import cls from './MainPage.module.scss'

const Main = () => {
	const { t } = useTranslation()
	const [dis, setDis] = useState(false)
	const clickButt = () => {
		setDis(!dis)
	}

	const [value, setValue] = useState(false)
	const handleSwicth = () => {
		setValue(!value)
	}

	console.log(value)

	return (
		<div className={cls.main}>
			<LangSwitcher className={cls.butt} />
			<ThemeSwitcher className={cls.butt} />
			<Button
				theme={ButtonTheme.FILED}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.OUTLINE}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.TEXT}
				size={ButtonSize.L}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.ELEVANT}
				size={ButtonSize.L}
				disabled={dis}
				onClick={clickButt}
				className={cls.test}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.TONAL}
				size={ButtonSize.M}
				disabled={dis}
				onClick={clickButt}
				className={cls.gg}
			>
				{t('Обычный')}
			</Button>
			<Switcher
				isOn={value}
				handleToggle={handleSwicth}
				disabled={false}
				theme={SwitcherTheme.COLORED}
			/>
			<Switcher
				isOn={value}
				handleToggle={handleSwicth}
				disabled={false}
				theme={SwitcherTheme.COLORED}
			/>
		</div>
	)
}

export default Main
