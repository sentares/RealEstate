import { StateSchema } from 'app/providers/store'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
