export interface ITypeRealty {
	house: boolean
	flat: boolean
	commerce: boolean
}

export enum filterTitileEnum {
	CELL = 'Продажа',
	RENT = 'Аренда',
	ALL = 'Все',
}

export interface ITypeCell {
	cell: {
		title: string
		active: boolean
	}
	rent: {
		title: string
		active: boolean
	}
	all: {
		title: string
		active: boolean
	}
}
export interface IFilter {
	realtyType: ITypeRealty
	cellType: ITypeCell
}

export interface FilterSchema {
	data: IFilter
	isLoading: boolean
	error?: string
	readonly: boolean
}
