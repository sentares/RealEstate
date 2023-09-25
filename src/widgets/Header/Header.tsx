import { ChevronDown, Heart, MapPin, Plus, UserCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button'
import cls from './Header.module.scss'
import LangSwitcher, {
	LangSwitcherTypeEnum,
} from 'shared/switchers/language-switcher/LanguageSwitcher'
import Container from 'widgets/Container/Container'

const Header = () => {
	return (
		<header className={cls.header}>
			<Container>
				<div className={cls.headerItems}>
					<div className={cls.headerRight}>
						<Link to={'/'}>
							<h2 className={cls.headerLogo}>Logo</h2>
						</Link>

						<Link to={'#'}>
							<Button
								className={cls.headerBut}
								theme={ButtonTheme.OUTLINE}
								size={ButtonSize.L}
							>
								<MapPin />
								<p>Бишкек</p>
							</Button>
						</Link>
					</div>

					<div className={cls.headerLeft}>
						<div className={cls.headerLangItems}>
							<LangSwitcher type={LangSwitcherTypeEnum.SELECT} />
							{/* <p className={cls.headerLangChange}>Pyc/Eng</p>
						<ChevronDown className={cls.headerChevron} /> */}
						</div>
						<div className={cls.headerHeart}>
							<Heart />
						</div>
						<Button className={cls.headerAdd} theme={ButtonTheme.OUTLINE}>
							<Plus />
							<p>Добавить объявление</p>
						</Button>
						<Button className={cls.headerUserBut}>
							<UserCircle2 />
							<p>Войти</p>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
