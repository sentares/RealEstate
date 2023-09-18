import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IRealty, RealtySchema } from '../types/realty'

const initialState: RealtySchema = {}

export const realtySlice = createSlice({
	name: 'realty',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<IRealty[]>) => {
			state.realtyArr = action.payload
		},
	},
})

export const { actions: realtyActions } = realtySlice
export const { reducer: realtyReducer } = realtySlice
