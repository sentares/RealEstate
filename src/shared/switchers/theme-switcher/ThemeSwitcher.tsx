import { Theme } from 'app/providers/themes/lib/ThemeContext'
import { useTheme } from 'app/providers/themes/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import Container from 'widgets/Container/Container'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Container>
			<Button
			theme={ButtonTheme.OUTLINE}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? 'DARK' : 'LIGHT'}
		</Button>
		</Container>
	)
}
