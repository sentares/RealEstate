import LoginForm from 'features/Auth/tsx/LoginForm/LoginForm'
import { DefCard } from 'features/RealtyCard'
import toast from 'react-hot-toast'
import { ThemeSwitcher } from 'shared/switchers/theme-switcher/ThemeSwitcher'
import cls from './MainPage.module.scss'

interface Option {
	id: number | null
	name: string
}

const Main = () => {
	return (
		<div className={cls.main}>
			<ThemeSwitcher />
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
