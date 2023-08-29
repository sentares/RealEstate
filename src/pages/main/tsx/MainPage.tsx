import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import cls from './MainPage.module.scss'

const Main = () => {
	const [dis, setDis] = useState(false)
	const clickButt = () => {
		setDis(!dis)
	}

	return (
		<div className={cls.main}>
			<Button
				theme={ButtonTheme.BACKGROUND}
				size={ButtonSize.S}
				disabled={dis}
				onClick={clickButt}
			>
				Primary
			</Button>
			<Button
				theme={ButtonTheme.BACKGROUND_ORANGE}
				size={ButtonSize.M}
				disabled={dis}
				onClick={clickButt}
			>
				Orange
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
