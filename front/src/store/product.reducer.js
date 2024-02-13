import { productService } from "../services/product.service"

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_FILTER = 'SET_FILTER'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    products: productService.query(),
    isLoading: false,
    filterBy: productService.getDefaultFilter(),
}

export function productReducer(state = initialState, action) {
    let products

    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.products }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ADD_PRODUCT:
            products = [action.product, ...state.products]
            return { ...state, products }

        // Filter
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

        default:
            return state
    }
}


