import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/themes'
import { ToastProvier } from './providers/toast'

function App() {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<ToastProvier />
			<AppRouter />
		</div>
	)
}

export default App
