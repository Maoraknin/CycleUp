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
    return storageService.query(BASE_URL, filterBy)
}


function get(filterBy = getDefaultFilter()) {
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
            image: "https://w7.pngwing.com/pngs/523/573/png-transparent-fizzy-drinks-coca-cola-diet-coke-beverage-can-coca-cola-food-tea-cola-thumbnail.png",
            garbageType: "orange"
    }
}

