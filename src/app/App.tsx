import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/themes'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
	const { theme } = useTheme()
	const URL = process.env.REACT_APP_API_HOST

	const getData = async () => {
		const data = await axios.get(`${URL}/real-estate/`)
		console.log(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className={classNames('app', {}, [theme])}>
			<AppRouter />
		</div>
	)
}

export default App
