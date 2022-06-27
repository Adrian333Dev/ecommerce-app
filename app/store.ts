import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dummyAPI } from '../services/dummyApi';
const rootReducer = combineReducers({
	[dummyAPI.reducerPath]: dummyAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(dummyAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
