import { StateSchema } from 'app/providers/store'

export const getFilterState = (state: StateSchema) => state.filter.data
