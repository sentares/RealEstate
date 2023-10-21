import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'

import { filterReducer } from 'entities/filter'
import { realtyReducer } from 'entities/realty'
import { userReducer } from 'entities/user'
import { $api } from 'shared/api/api'
import { createReducerManager } from './ReduserManager'
import { StateSchema, ThunkExtraArg } from './StateSchema'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
		realty: realtyReducer,
		filter: filterReducer,
	}

	const reducerManager = createReducerManager(rootReducers)

	const extraArg: ThunkExtraArg = {
		api: $api,
	}

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
