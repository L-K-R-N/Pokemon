import {combineReducers} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { pokemonAPI } from '../service/PokemonService'

import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    [pokemonAPI.reducerPath]: pokemonAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(pokemonAPI.middleware)
        
    })
}

const persistConfig = {
    key: 'root',
    storage,

}