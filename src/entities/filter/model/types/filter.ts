export interface ITypeRealty {
	house: { active: boolean; name: string }
	apartment: { active: boolean; name: string }
	commercial: { active: boolean; name: string }
	plot: { active: boolean; name: string }
	сountry_house: { active: boolean; name: string }
	garage: { active: boolean; name: string }
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
