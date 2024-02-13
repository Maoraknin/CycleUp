import { productService } from "../services/product.service"

export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_FILTER = 'SET_FILTER'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    products: [],
    isLoading: false,
    filterBy: productService.getDefaultFilter(),
}

export function productReducer(state = initialState, action) {
    let products

    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, products: action.products }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case ADD_COMMENT:
            products = [action.product, ...state.products]
            return { ...state, products }

        // Filter
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }

        default:
            return state
    }
}


