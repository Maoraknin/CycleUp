const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

// Product
// product

async function query(filterBy={txt:''}) {
    try {
        const criteria = {
            txt: { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('product')
        var products = await collection.find(criteria).toArray()
        return products
    } catch (err) {
        logger.error('cannot find products', err)
        throw err
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('product')
        const product = collection.findOne({ _id: ObjectId(productId) })
        return product
    } catch (err) {
        logger.error(`while finding product ${productId}`, err)
        throw err
    }
}

async function remove(productId) {
    try {
        const collection = await dbService.getCollection('product')
        await collection.deleteOne({ _id: ObjectId(productId) })
        return productId
    } catch (err) {
        logger.error(`cannot remove product ${productId}`, err)
        throw err
    }
}

async function add(product) {
    try {
        const collection = await dbService.getCollection('product')
        await collection.insertOne(product)
        return product
    } catch (err) {
        logger.error('cannot insert product', err)
        throw err
    }
}

async function update(product) {
    try {
        const productToSave = {
            txt: product.txt
        }
        const collection = await dbService.getCollection('product')
        await collection.updateOne({ _id: ObjectId(product._id) }, { $set: productToSave })
        return product
    } catch (err) {
        logger.error(`cannot update product ${product._id}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}