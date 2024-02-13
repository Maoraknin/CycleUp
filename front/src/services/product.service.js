// import { httpService } from './http.service.js'

import { storageService } from './async-storage.service.js'

// const BASE_URL = 'product/'
const BASE_URL = 'product'


export const productService = {
    query,
    save,
    getDefaultFilter,
    getEmptyProduct
}

function query(filterBy = getDefaultFilter()) {
    const queryParams = `?content=${filterBy.content}`
    return storageService.get(BASE_URL + queryParams)
}

function save(product) {
    if (product._id) {
        return storageService.put(BASE_URL, product)
    } else {
        return storageService.post(BASE_URL, product)
    }
}

function getDefaultFilter() {
    return { content: '' }
}

function getEmptyProduct() {
    return {
        mail: '',
        imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png',
        txt: '',
    }
}

