import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store/config/StateSchema'
import { IRealty } from '../types/realty'
import { realtyActions } from '../slice/RealtySlice'

export const getRealtyService = createAsyncThunk<
	IRealty[],
	null,
	ThunkConfig<string>
>('realty', async (_, thunkApi) => {
	const { extra, dispatch, rejectWithValue } = thunkApi

	try {
		const response = await extra.api.get('/real-estate/')
		return response.data
	} catch (e) {
		return rejectWithValue('error')
	}
})
