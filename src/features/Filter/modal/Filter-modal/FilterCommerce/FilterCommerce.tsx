import { filterActions } from 'entities/filter/model/slice/FilterSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/button/Button'
import Switcher from 'shared/ui/switcher/Switcher'
import cls from './FilterCommerce.module.scss'

interface FilterCommerceProps {
	realtyType: { active: boolean; name: string }
}

const FilterCommerce = (props: FilterCommerceProps) => {
	const { realtyType } = props

	const dispatch = useAppDispatch()

	function changeToggleCommerce() {
		dispatch(filterActions.setTypeCommercial(!realtyType.active))
	}

	return (
		<div className={cls.filterCommerce}>
			<div className={cls.filterCommerceTitle}>
				Коммерческое
				<Switcher
					isOn={realtyType.active}
					onToggle={changeToggleCommerce}
					id='commerce'
				/>
			</div>
			{realtyType.active && (
				<div className={cls.filterCommerceWrapper}>
					<div className={cls.filterCommerceSquare}>
						<p className={cls.filterCommerceTitleSquare}>Площадь</p>
						<div className={cls.filterCommerceInputItems}>
							<input
								className={cls.filterCommerceInput}
								type='number'
								placeholder='От'
							/>
							<input
								className={`${cls.filterCommerceInput} ${cls.filterCommerceInput2}`}
								type='number'
								placeholder='До                          m2'
							/>
						</div>
					</div>
					<div className={cls.filterCommerceSquare}>
						<p className={cls.filterCommerceTitleSquare}>Этажей в офисе</p>
						<div className={cls.filterCommerceInputItems}>
							<input
								className={cls.filterCommerceInput}
								type='number'
								placeholder='От'
							/>
							<input
								className={cls.filterCommerceInput}
								type='number'
								placeholder='До'
							/>
						</div>
					</div>
					<div className={cls.filterCommerceItemBlog}>
						<p className={cls.filterCommerceTitleSquare}>Отделка</p>
						<div className={cls.filterCommerceGroupBtn}>
							<Button className={cls.filterCommerceBtn}>
								Частичный ремонт
							</Button>
							<Button className={cls.filterCommerceBtn}>
								Косметический ремонт
							</Button>
							<Button className={cls.filterCommerceBtn}>
								Современный ремонт
							</Button>
							<Button className={cls.filterCommerceBtn}>Нет ремонта</Button>
						</div>
					</div>

					<div className={cls.filterCommerceItemBlog}>
						<p className={cls.filterCommerceTitleSquare}>Парковка</p>
						<div className={cls.filterCommerceGroupBtn}>
							<Button className={cls.filterCommerceBtn}>Закрытая</Button>
							<Button className={cls.filterCommerceBtn}>Подземная</Button>
							<Button className={cls.filterCommerceBtn}>Открытая</Button>
						</div>
					</div>

					<div className={cls.filterCommerceItemBlog}>
						<p className={cls.filterCommerceTitleSquare}>Мебель</p>
						<div className={cls.filterCommerceGroupBtn}>
							<Button className={cls.filterCommerceBtn}>Да</Button>
							<Button className={cls.filterCommerceBtn}>Нет</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default FilterCommerce
