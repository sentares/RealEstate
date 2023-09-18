import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './DefCard.module.scss'
import { Phone } from 'lucide-react'
const DefCard = () => {
	return (
		<div className={cls.DefCard}>
			<div className={cls.imageBlock}>
				<img
					src='https://avatars.githubusercontent.com/u/112559290?v=4'
					alt='photo'
					className={cls.image}
				/>
			</div>
			<div className={cls.infoBlock}>
				<div className={cls.info}>
					<h2>250 000 тг</h2>
					<p>2-комнт.кв | 68 м2 | 4/12 эт. </p>
					<p>ЖК Айва, ул. Акбулак 22, р-н Нура</p>
				</div>
				<Button className={cls.call} theme={ButtonTheme.OUTLINE}>
					<Phone className={cls.phone} />
					Позвонить
				</Button>
			</div>
		</div>
	)
}

export default DefCard
