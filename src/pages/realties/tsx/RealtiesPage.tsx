import { getRealtyService, realtyReducer, realtyState } from 'entities/realty'
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

	const data = useSelector(realtyState)

	useEffect(() => {
		dispatch(getRealtyService(null))
		window.scrollTo(0, 0)
	}, [])

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div className={cls.realtiesPage}>
				{data &&
					data.map(realty => <InfoCard key={realty.id} realty={realty} />)}
			</div>
		</DynamicModuleLoader>
	)
}

export default RealtiesPage
