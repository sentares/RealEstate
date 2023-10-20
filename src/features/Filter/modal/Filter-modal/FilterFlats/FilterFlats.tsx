import { Button } from 'shared/ui/button/Button'
import cls from './FilterFlats.module.scss'

const FilterFlats = () => {
	return (
		<div className={cls.filterFlats}>
			<h2 className={cls.filterFlatsTitle}>Квартиры</h2>
			<div className={cls.filterFlatsWrapper}>
				<div className={cls.filterFlatsSquare}>
					<h5 className={cls.filterFlatsTitleSquare}>Площадь</h5>
						<div className={cls.filterFlatsInputItems}>
							<input className={cls.filterFlatsInput} type="number" placeholder='От'/>
							<input className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`} type="number" placeholder='До                          m2'/>
						</div>
				</div>
				<div className={cls.filterFlatsSquare}>
					<h5 className={cls.filterFlatsTitleSquare}>Этаж</h5>
						<div className={cls.filterFlatsInputItems}>
							<input className={cls.filterFlatsInput} type="number" placeholder='От'/>
							<input className={cls.filterFlatsInput} type="number" placeholder='До'/>
						</div>
						<div className={cls.filterFlatsCheckbox}>
							<label>
								<input type="checkbox" />
							Не первый
							</label>
							<label>
								<input type="checkbox" />
							Не последний
							</label>
							<label>
								<input type="checkbox" />
							Последний
							</label>	
						</div>
				</div>
				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Отделка</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Частичный ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Косметический ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Современный ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Нет ремонта</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Балкон</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Балкон</Button>
						<Button className={cls.filterFlatsBtn}>Лоджия</Button>
						<Button className={cls.filterFlatsBtn}>Балкон и лоджия</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Мебель</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Да</Button>
						<Button className={cls.filterFlatsBtn}>Нет</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Кухня</h5>
					<div className={cls.filterFlatsInputItems}>
							<input className={cls.filterFlatsInput} type="number" placeholder='От'/>
							<input className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`} type="number" placeholder='До                          m2'/>
						</div>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>от 6 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 8 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 10 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 14 м2</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Высота потолков</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>от 2,5 м</Button>
						<Button className={cls.filterFlatsBtn}>от 2,7 м</Button>
						<Button className={cls.filterFlatsBtn}>от 3 м</Button>
						<Button className={cls.filterFlatsBtn}>от 4 м</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<h5 className={cls.filterFlatsTitleSquare}>Санузел</h5>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Раздельный</Button>
						<Button className={cls.filterFlatsBtn}>Совмещенный</Button>
						<Button className={cls.filterFlatsBtn}>Несколько</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterFlats
