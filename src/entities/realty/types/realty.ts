export interface IRealty {
	images: { image: string }
	prices: { id: number; real_estate: number }
	location: {
		id: number
		region: string
		city: string
		district: string
		street: string
		house_num: string
		real_estate: number
	}
	characteristics: {
		id: number
		phone: string
		internet: string
		bathrooms: string
		gas: string
		balcony: string
		furniture: string
		ceilings_height: number
		sewerage: string
		wifi: string
		parking: string
		electricity: string
		floor: string
		safety: string
		documents: string
		other_apartment: string
		other_house: string
		other_plot: string
		location_plot: string
		communications_plot: string
		drinking_water: string
		real_estate: number
	}
}

export interface RealtySchema {
	realtyArr?: IRealty[]
	// isLoading?: boolean
	// error?: string
}
