import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store/config/StateSchema'
import { IRealty } from '../types/realty'
import { realtyActions } from '../slice/RealtySlice'

export const getRealtyService = createAsyncThunk<
	IRealty[],
	any,
	ThunkConfig<string>
>('realty', async (_, thunkApi) => {
	const { extra, dispatch, rejectWithValue } = thunkApi

	try {
		// const response = await extra.api.get('/real-estate/')

		// if (!response.data) {
		// 	throw new Error()
		// }

		const testData = [
			{
				images: {
					image: 'string',
				},
				prices: {
					id: 0,
					real_estate: 0,
				},
				location: {
					id: 0,
					region: 'Bishkek City',
					city: 'Bishkek',
					district: 'string',
					street: 'string',
					house_num: 'string',
					real_estate: 0,
				},
				characteristics: {
					id: 0,
					phone: 'in_place',
					internet: 'ADSL',
					bathrooms: 'separate',
					gas: 'autonomous',
					balcony: 'balcony',
					furniture: 'in_place',
					ceilings_height: 0,
					sewerage: 'central',
					wifi: 'in_place',
					parking: 'parking',
					electricity: 'in_place',
					floor: 'linoleum',
					safety: 'window_bars',
					documents: 'contract_of_sale',
					other_apartment: 'plastic_windows',
					other_house: 'plastic_windows',
					other_plot: 'foundation',
					location_plot: 'city',
					communications_plot: 'electricity',
					drinking_water: 'central',
					real_estate: 0,
				},
			},
		]

		dispatch(realtyActions.setData(testData))
		return testData
	} catch (e) {
		console.log(e)
		return rejectWithValue('error')
	}
})
