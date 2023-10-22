import { StateSchema } from 'app/providers/store'

export const realtyState = (state: StateSchema) => state?.realty?.realtyArr
export const realtyStateLoading = (state: StateSchema) =>
	state?.realty?.isLoading
