import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

// import { rootApi } from 'src/api/api';

import authReducer, { authPersistConfig } from './authentication/slices';
import appReducer, { appPersistConfig } from './app/slices';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';

const persistCommonConfig = {
	storage: storage,
};

const rootReducer = combineReducers({
	auth: persistReducer<ReturnType<typeof authReducer>>({...persistCommonConfig, ...authPersistConfig}, authReducer),
	app: persistReducer<ReturnType<typeof appReducer>>({...persistCommonConfig, ...appPersistConfig}, appReducer),
});

export const store = configureStore({
	reducer: rootReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
