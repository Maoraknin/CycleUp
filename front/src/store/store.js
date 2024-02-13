import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { productReducer } from './product.reducer.js'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer = combineReducers({
    productModule: productReducer,
})

export const store = createStore(rootReducer, middleware())

