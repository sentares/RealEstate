import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store/config/StateSchema'
import { IRealty } from '../types/realty'
import { IFilter, ITypeCell, ITypeRealty } from 'entities/filter'

interface filterStateProps {
	realtyType: ITypeRealty
	cellType: ITypeCell
}

export const getRealtyService = createAsyncThunk<
	IRealty[],
	filterStateProps,
	ThunkConfig<string>
>('realty', async (filterState, thunkApi) => {
	const { extra, dispatch, rejectWithValue } = thunkApi

	try {
		const realtyTypeKeys = Object.keys(filterState.realtyType)
		const selectedRealtyTypeKey = realtyTypeKeys.find(
			//@ts-ignore
			key => filterState.realtyType[key].active
		)

		const response = await extra.api.get(
			`/real-estate/?deal_type=${
				selectedRealtyTypeKey ? selectedRealtyTypeKey : ''
			}`
		)

		return response.data
	} catch (e) {
		return rejectWithValue('error')
	}
})
