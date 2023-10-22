import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FilterSchema, filterTitileEnum } from '../types/filter'

const initialState: FilterSchema = {
	isLoading: false,
	readonly: false,
	data: {
		realtyType: {
			house: false,
			flat: false,
			commerce: false,
		},
		cellType: {
			cell: { title: 'Продажа', active: false },
			rent: { title: 'Аренда', active: false },
			all: { title: 'Все', active: true },
		},
	},
	error: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		},
		setLoading: state => {
			state.isLoading = true
		},
		//RealtyType
		setTypeHouse: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.house = action.payload
		},
		setTypeFlat: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.flat = action.payload
		},
		setTypeCommerce: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.commerce = action.payload
		},

		//CellType
		setCellTypeCell: (state, action: PayloadAction<boolean>) => {
			state.data.cellType.cell.active = action.payload
			state.data.cellType.rent.active = false
			state.data.cellType.all.active = false
		},
		setCellTypeRent: (state, action: PayloadAction<boolean>) => {
			state.data.cellType.rent.active = action.payload
			state.data.cellType.cell.active = false
			state.data.cellType.all.active = false
		},
		setCellTypeAll: (state, action: PayloadAction<boolean>) => {
			state.data.cellType.all.active = action.payload
			state.data.cellType.rent.active = false
			state.data.cellType.cell.active = false
		},
	},
})

export const { actions: filterActions } = filterSlice
export const { reducer: filterReducer } = filterSlice

export const changeCellType =
	(filterTitle: filterTitileEnum) => async (dispatch: Function) => {
		try {
			switch (filterTitle) {
				case filterTitileEnum.CELL:
					dispatch(filterActions.setCellTypeCell(true))
					break
				case filterTitileEnum.RENT:
					dispatch(filterActions.setCellTypeRent(true))
					break
				case filterTitileEnum.ALL:
					dispatch(filterActions.setCellTypeAll(true))
					break
				default:
					break
			}
		} catch (e) {
			dispatch(filterActions.setError(`${e}`))
		}
	}
