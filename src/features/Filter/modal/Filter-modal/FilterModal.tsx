import { Button } from 'shared/ui/button/Button'
import cls from './FilterModal.module.scss'
import FilterFlats from './FilterFlats/FilterFlats'
import FilterHouse from './FilterHouse/FilterHouse'
import FilterLocation from './FilterLocation/FilterLocation'

interface FilterModalProps {
	changeModalState: () => void
}

const FilterModal = (props: FilterModalProps) => {
	const { changeModalState } = props
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
				<FilterFlats />
				<FilterHouse />
				<FilterLocation />
			</div>
		</section>
	)
}

export default FilterModal
