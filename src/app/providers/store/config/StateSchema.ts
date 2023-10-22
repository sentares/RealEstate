import {
	AnyAction,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { FilterSchema } from 'entities/filter'
import { ProfileSchema } from 'entities/profile'
import { RealtySchema } from 'entities/realty'
import { UserSchema } from 'entities/user'
import { LoginSchema } from 'features/Auth'

import { CombinedState } from 'redux'

export interface StateSchema {
	user: UserSchema
	filter: FilterSchema

	loginForm?: LoginSchema
	profile?: ProfileSchema
	realty?: RealtySchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
}
