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
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.ELEVANT}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
			<Button
				theme={ButtonTheme.TONAL}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
				className={cls.butt}
			>
				{t('Обычный')}
			</Button>
		</div>
	)
}

export default Main
