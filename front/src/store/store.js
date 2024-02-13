import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { commentReducer } from './comment.reducer.js'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer = combineReducers({
    commentModule: commentReducer,
})

export const store = createStore(rootReducer, middleware())

