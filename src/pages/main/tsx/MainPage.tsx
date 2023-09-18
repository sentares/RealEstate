import { getRealty } from 'entities/realty/selectors/getRealty'
import { getRealtyService } from 'entities/realty/service/RealtyService'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { LangSwitcher } from 'shared/switchers/language-switcher/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import Switcher, { SwitcherTheme } from 'shared/ui/switcher/Switcher'
import cls from './MainPage.module.scss'

const Main = () => {
	const data = useSelector(getRealty)
	console.log(data)

	const { t } = useTranslation()
	const [dis, setDis] = useState(false)
	const clickButt = () => {
		setDis(!dis)
	}

	const [value, setValue] = useState(false)
	const handleSwicth = () => {
		setValue(!value)
	}

	const dispatch = useAppDispatch()

	const onLoginClick = useCallback(async () => {
		try {
			await dispatch(getRealtyService(null))
			console.log('all good')
		} catch (error) {
			console.error('Error:', error)
		}
	}, [dispatch])

	return (
		<div className={cls.main}>
			<LangSwitcher className={cls.butt} />
			<ThemeSwitcher className={cls.butt} />
			<Button
				theme={ButtonTheme.FILED}
				size={ButtonSize.S}
				disabled={dis}
				onClick={onLoginClick}
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
				icon={true}
			/>
		</div>
	)
}

export default Main
