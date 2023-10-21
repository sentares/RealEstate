export interface ITypeRealty {
	house: boolean
	flat: boolean
	commerce: boolean
}
export interface IFilter {
	type: ITypeRealty
}

export interface FilterSchema {
	data: IFilter
	isLoading: boolean
	error?: string
	readonly: boolean
}
