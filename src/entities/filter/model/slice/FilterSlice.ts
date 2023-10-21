import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FilterSchema, IFilter } from '../types/filter'

const initialState: FilterSchema = {
	isLoading: false,
	readonly: false,
	data: {
		house: false,
		flat: false,
	},
	error: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<IFilter>) => {
			state.data = action.payload
		},
	},
})

export const { actions: filterActions } = filterSlice
export const { reducer: filterReducer } = filterSlice
