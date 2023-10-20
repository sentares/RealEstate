import { Button } from 'shared/ui/button/Button'
import cls from './FilterFlats.module.scss'
import Switcher from 'shared/ui/switcher/Switcher'
import { useState } from 'react'

const FilterFlats = () => {
	const [toggleFlats, setToggleFlats] = useState(false)
	function changeToggleFlats() {
		setToggleFlats(!toggleFlats)
	}

	return (
		<div className={cls.filterFlats}>
			<div className={cls.filterFlatsTitle}>
				Квартиры
				<Switcher isOn={toggleFlats} handleToggle={changeToggleFlats} />
			</div>
			<div className={cls.filterFlatsWrapper}>
				<div className={cls.filterFlatsSquare}>
					<p className={cls.filterFlatsTitleSquare}>Площадь</p>
					<div className={cls.filterFlatsInputItems}>
						<input
							className={cls.filterFlatsInput}
							type='number'
							placeholder='От'
						/>
						<input
							className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`}
							type='number'
							placeholder='До                          m2'
						/>
					</div>
				</div>
				<div className={cls.filterFlatsSquare}>
					<p className={cls.filterFlatsTitleSquare}>Этаж</p>
					<div className={cls.filterFlatsInputItems}>
						<input
							className={cls.filterFlatsInput}
							type='number'
							placeholder='От'
						/>
						<input
							className={cls.filterFlatsInput}
							type='number'
							placeholder='До'
						/>
					</div>
					<div className={cls.filterFlatsCheckbox}>
						<label>
							<input type='checkbox' />
							Не первый
						</label>
						<label>
							<input type='checkbox' />
							Не последний
						</label>
						<label>
							<input type='checkbox' />
							Последний
						</label>
					</div>
				</div>
				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Отделка</p>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Частичный ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Косметический ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Современный ремонт</Button>
						<Button className={cls.filterFlatsBtn}>Нет ремонта</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Балкон</p>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Балкон</Button>
						<Button className={cls.filterFlatsBtn}>Лоджия</Button>
						<Button className={cls.filterFlatsBtn}>Балкон и лоджия</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Мебель</p>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>Да</Button>
						<Button className={cls.filterFlatsBtn}>Нет</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Кухня</p>
					<div className={cls.filterFlatsInputItems}>
						<input
							className={cls.filterFlatsInput}
							type='number'
							placeholder='От'
						/>
						<input
							className={`${cls.filterFlatsInput} ${cls.filterFlatsInput2}`}
							type='number'
							placeholder='До                          m2'
						/>
					</div>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>от 6 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 8 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 10 м2</Button>
						<Button className={cls.filterFlatsBtn}>от 14 м2</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Высота потолков</p>
					<div className={cls.filterFlatsGroupBtn}>
						<Button className={cls.filterFlatsBtn}>от 2,5 м</Button>
						<Button className={cls.filterFlatsBtn}>от 2,7 м</Button>
						<Button className={cls.filterFlatsBtn}>от 3 м</Button>
						<Button className={cls.filterFlatsBtn}>от 4 м</Button>
					</div>
				</div>

				<div className={cls.filterFlatsItemBlog}>
					<p className={cls.filterFlatsTitleSquare}>Санузел</p>
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
