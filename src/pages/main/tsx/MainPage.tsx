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
import LoginForm from 'features/Auth/tsx/LoginForm/LoginForm'
import toast from 'react-hot-toast'
import LangSwitcher, {
	LangSwitcherTypeEnum,
} from 'shared/switchers/language-switcher/LanguageSwitcher'

interface Option {
	id: number | null
	name: string
}

const Main = () => {
	return (
		<div className={cls.main}>
			<div>
				<DefCard />
			</div>

			<LoginForm
				onSuccess={() => {
					toast.success('good')
				}}
			/>
		</div>
	)
}

export default Main
