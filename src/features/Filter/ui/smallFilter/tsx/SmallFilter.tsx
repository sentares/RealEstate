import { DealType } from 'shared/const/dealType'
import cls from './SmallFilter.module.scss'
import Select from 'shared/ui/select/Select'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import { Input } from 'shared/ui/input/Input'
import { AppLink } from 'shared/ui/appLink/AppLink'
import { RoutePath } from 'app/providers/router'

const SmallFilter = () => {
	const listStyles = { position: 'absolute' }
	return (
		<div className={cls.smallFilter}>
			<div className={cls.dealType}>
				<Select
					options={DealType}
					placeholder='Тип недвижимости'
					listStyles={listStyles}
				/>
			</div>
			<div className={cls.roomsCategory}>
				<p>Количество комнат</p>
				<div className={cls.numButtons}>
					<Button className={cls.num}>1</Button>
					<Button className={cls.num}>2</Button>
					<Button className={cls.num} theme={ButtonTheme.TONAL}>
						3
					</Button>
					<Button className={cls.num}>4</Button>
					<Button className={cls.num}>5</Button>
					<Button className={cls.num} style={{ padding: '6px 6px' }}>
						+6
					</Button>
				</div>
			</div>
			<div className={cls.roomsCategory}>
				<p>Стоимость</p>
				<div style={{ display: 'flex' }}>
					<Input before='От' className={cls.roomInput} />
					<Input before='До' className={cls.roomInputRight} />
				</div>
			</div>
			<div className={cls.roomsCategorySolo}>
				<Input placeholder='Адрес, ЖК или район' className={cls.address} />
			</div>
			<AppLink to={`${RoutePath.realties}`} className={cls.showBtn}>
				<Button className={cls.searchButton}>Показать</Button>
			</AppLink>
		</div>
	)
}

export default SmallFilter
