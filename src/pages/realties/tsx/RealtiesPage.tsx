import { getFilterState } from 'entities/filter/model/selectors/getFilterState'
import {
	getRealtyService,
	realtyReducer,
	realtyState,
	realtyStateLoading,
} from 'entities/realty'
import { SmallFilter } from 'features/Filter'
import InfoCard from 'features/RealtyCard/ui/tsx/InfoCard/InfoCard'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import cls from './RealtiesPage.module.scss'

const initialReducers: ReducersList = {
	realty: realtyReducer,
}

const RealtiesPage = () => {
	const dispatch = useAppDispatch()

	const { cellType, realtyType } = useSelector(getFilterState)

	const data = useSelector(realtyState)
	const isLoading = useSelector(realtyStateLoading)

	useEffect(() => {
		dispatch(getRealtyService({ cellType, realtyType }))
		window.scrollTo(0, 0)
	}, [realtyType])

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div className={cls.realtiesPage}>
				<SmallFilter />
				{isLoading && <div>Loading...</div>}
				{data &&
					!isLoading &&
					data.map(realty => <InfoCard key={realty.id} realty={realty} />)}
			</div>
		</DynamicModuleLoader>
	)
}

export default RealtiesPage
