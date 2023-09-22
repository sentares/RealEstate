import { StateSchema } from 'app/providers/store'

export const getLoginUsername = (state: StateSchema) =>
	state?.loginForm?.username || ''
