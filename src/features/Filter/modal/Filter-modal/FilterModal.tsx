import { getFilterState } from 'entities/filter/model/selectors/getFilterState'
import { useSelector } from 'react-redux'
import { Button } from 'shared/ui/button/Button'
import FilterCommerce from './FilterCommerce/FilterCommerce'
import FilterFlats from './FilterFlats/FilterFlats'
import FilterHouse from './FilterHouse/FilterHouse'
import FilterLocation from './FilterLocation/FilterLocation'
import cls from './FilterModal.module.scss'

interface FilterModalProps {
	changeModalState: () => void
}

const FilterModal = (props: FilterModalProps) => {
	const { changeModalState } = props

	const { type: typeState } = useSelector(getFilterState)

	const cellTypes = [
		{ id: 1, title: 'Аренда', active: false },
		{ id: 2, title: 'Продажа', active: false },
		{ id: 3, title: 'Все', active: true },
	]

	return (
		<section className={cls.filterModal}>
			<div className={cls.filter}>
				<div className={cls.filterModalClose}>
					<h1 className={cls.filterTitle}>Расширенные фильтры</h1>
					<Button className={cls.filterClose} onClick={changeModalState}>
						&times;
					</Button>
				</div>
				<div className={cls.filterFineHousing}>
					<div className={cls.filterInfoText}>
						<h3 className={cls.filterInfoTitle}>
							Подбор идеального жилья — это просто с нами
						</h3>
						<p className={cls.filterText}>
							Сэкономьте свое драгоценное время и усилия, доверьте
							профессионалам. Мы поможем вам подобрать идеальное жилье,
							полностью соответствующее вашим критериям.
						</p>
					</div>
					<div className={cls.filterBlogBtn}>
						<Button className={cls.filterBtn}>Найти моё жильё</Button>
					</div>
				</div>
				<div className={cls.filterCellType}>
					{cellTypes.map(cellType => (
						<div
							key={cellType.id}
							className={`${cls.singleCellType} ${
								cellType.active ? cls.activeCellType : ''
							}`}
						>
							{cellType.active && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='19'
									height='18'
									viewBox='0 0 19 18'
								>
									<path d='M7.41662 12.1275L4.28912 9L3.22412 10.0575L7.41662 14.25L16.4166 5.25L15.3591 4.1925L7.41662 12.1275Z' />
								</svg>
							)}
							{cellType.title}
						</div>
					))}
				</div>
				<FilterFlats typeState={typeState.flat} />
				<FilterHouse typeState={typeState.house} />
				<FilterCommerce typeState={typeState.commerce} />
				<FilterLocation />
				<div className={cls.filterLocationShowBtn}>
					<Button className={cls.filterBtn}>Показать</Button>
				</div>
			</div>
		</section>
	)
}

export default FilterModal
