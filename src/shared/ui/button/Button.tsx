import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
	OUTLINE = 'outline',
	OUTLINE_ORANGE = 'outlineOrange',
	BACKGROUND = 'background',
	BACKGROUND_ORANGE = 'backgroundOrange',
}

export enum ButtonSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	size?: ButtonSize
	disabled?: boolean
	children?: ReactNode | any
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[size]]: true,
		[cls.disabled]: disabled,
	}

	return (
		<button
			type='button'
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})
