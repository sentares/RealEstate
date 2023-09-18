import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/themes'

function App() {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<AppRouter />
		</div>
	)
}

export default App
