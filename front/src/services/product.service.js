// import { httpService } from './http.service.js'

import { storageService } from './async-storage.service.js'

// const BASE_URL = 'product/'
const BASE_URL = 'product'


export const productService = {
    query,
    save,
    getGarbageTypes,
    getDefaultFilter,
    getEmptyProduct
}

function query(filterBy = getDefaultFilter()) {
    const queryParams = `?name=${filterBy.name}`
    return storageService.get(BASE_URL + queryParams)
}

function save(product) {
    if (product._id) {
        return storageService.put(BASE_URL, product)
    } else {
        return storageService.post(BASE_URL, product)
    }
}


function getGarbageTypes() {
    return {
       green: 'mixed', 
       blue: 'paper', 
       orange: 'packages & plastic',
       brown: 'organics',
       purple: 'glass',
       gray: 'metal',

    }
}

function getDefaultFilter() {
    return { 
        name: '',
        garbageType: '',
     }
}

function getEmptyProduct() {

    return {
            name: "Coke",
            company: "CokaCola",
            image: "https://example.com/recyclable_product1.jpg",
            garbage_type: "orange"
    }
}

