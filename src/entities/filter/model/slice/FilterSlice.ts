import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FilterSchema, filterTitileEnum } from '../types/filter'

const initialState: FilterSchema = {
	isLoading: false,
	readonly: false,
	data: {
		realtyType: {
			house: { active: false, name: 'Дом' },
			apartment: { active: false, name: 'Квартира' },
			commercial: { active: false, name: 'Коммерческая недвижимость' },
			plot: { active: false, name: 'Участок' },
			сountry_house: { active: false, name: 'Дача' },
			garage: { active: false, name: 'Гараж' },
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
			state.data.realtyType.house.active = action.payload
		},
		setTypeApartment: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.apartment.active = action.payload
		},
		setTypeCommercial: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.commercial.active = action.payload
		},
		setTypePlot: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.plot.active = action.payload
		},
		setTypeCountryHouse: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.сountry_house.active = action.payload
		},
		setTypeGarage: (state, action: PayloadAction<boolean>) => {
			state.data.realtyType.garage.active = action.payload
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

export const changeRealtyType =
	(key: string, isActive: boolean) => async (dispatch: Function) => {
		switch (key) {
			case 'house':
				dispatch(filterActions.setTypeHouse(!isActive))
				break
			case 'apartment':
				dispatch(filterActions.setTypeApartment(!isActive))
				break
			case 'commercial':
				dispatch(filterActions.setTypeCommercial(!isActive))
				break
			case 'сountry_house':
				dispatch(filterActions.setTypeCountryHouse(!isActive))
				break
			case 'plot':
				dispatch(filterActions.setTypePlot(!isActive))
				break
			case 'garage':
				dispatch(filterActions.setTypeGarage(!isActive))

				break
			default:
				break
		}
	}
