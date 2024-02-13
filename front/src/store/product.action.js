import { productService } from '../services/product.service.js'
import { store } from './store.js'
import { SET_PRODUCTS, ADD_PRODUCT, SET_IS_LOADING, SET_FILTER } from './product.reducer.js'

export async function loadProducts(filterBy = '') {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const products = await productService.query(filterBy)
        store.dispatch({ type: SET_PRODUCTS, products: products })
        return products
    } catch (err) {
        console.log('Had issues loading products', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function saveProduct(product) {
    try {
        const savedProduct = await productService.save(product)
        store.dispatch({ type: ADD_PRODUCT, product: savedProduct })
        return savedProduct
    } catch (err) {
        console.error('Cannot save product:', err)
        throw err
    }
}

export function setFilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
