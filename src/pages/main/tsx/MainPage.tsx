import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import cls from './MainPage.module.scss'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'shared/switchers/language-switcher/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'

const Main = () => {
	const { t } = useTranslation()
	const [dis, setDis] = useState(false)
	const clickButt = () => {
		setDis(!dis)
	}

	return (
		<div className={cls.main}>
			<LangSwitcher />
			<ThemeSwitcher />
			<Button
				theme={ButtonTheme.BACKGROUND}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.BACKGROUND_ORANGE}
				size={ButtonSize.M}
				disabled={dis}
				onClick={clickButt}
			>
				{t('Оранжевый')}
			</Button>
			<Button
				theme={ButtonTheme.BACKGROUND}
				size={ButtonSize.L}
				disabled={dis}
				onClick={clickButt}
			>
				Orange
			</Button>
			<Button
				theme={ButtonTheme.OUTLINE_ORANGE}
				size={ButtonSize.L}
				disabled={dis}
				onClick={clickButt}
			>
				Orange
			</Button>
			<Button
				theme={ButtonTheme.OUTLINE}
				size={ButtonSize.M}
				disabled={dis}
				onClick={clickButt}
			>
				Orange
			</Button>
			<Button
				theme={ButtonTheme.OUTLINE}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
			>
				Orange
			</Button>
		</div>
	)
}

export default Main
