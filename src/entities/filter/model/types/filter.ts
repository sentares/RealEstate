export interface IFilter {
	house: boolean
	flat: boolean
}

export interface FilterSchema {
	data: IFilter
	isLoading: boolean
	error?: string
	readonly: boolean
}
