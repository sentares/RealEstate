import { StateSchema } from 'app/providers/store'

export const getRealty = (state: StateSchema) => state?.realty?.realtyArr
