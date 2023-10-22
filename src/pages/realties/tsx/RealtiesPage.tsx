import { getRealtyService, realtyReducer } from 'entities/realty'
import { getRealty } from 'entities/realty/selectors/getRealty'
import { realpath } from 'fs'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const initialReducers: ReducersList = {
	realty: realtyReducer,
}

const RealtiesPage = () => {
	const dispatch = useAppDispatch()

	const data = useSelector(getRealty)
	useEffect(() => {
		dispatch(getRealtyService(null))
	}, [])

	console.log(data)

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div>RealtiesPage</div>
		</DynamicModuleLoader>
	)
}

export default RealtiesPage
