import 'app/styles/index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import App from './app/App'

import { StoreProvider } from 'app/providers/store'
import { ThemeProvider } from 'app/providers/themes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StoreProvider>
	</BrowserRouter>
)
