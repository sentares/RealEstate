import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FilterSchema, IFilter, ITypeRealty } from '../types/filter'

const initialState: FilterSchema = {
	isLoading: false,
	readonly: false,
	data: {
		type: {
			house: false,
			flat: false,
			commerce: false,
		},
	},
	error: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTypeHouse: (state, action: PayloadAction<boolean>) => {
			state.data.type.house = action.payload
		},
		setTypeFlat: (state, action: PayloadAction<boolean>) => {
			state.data.type.flat = action.payload
		},
		setTypeCommerce: (state, action: PayloadAction<boolean>) => {
			state.data.type.commerce = action.payload
		},
	},
})

export const { actions: filterActions } = filterSlice
export const { reducer: filterReducer } = filterSlice
