const logger = require('../../services/logger.service')
const productsService = require('./product.service')

// TODO: Change to product service
// product

async function getProducts(req, res) {
    try {
      logger.debug('Getting Products')
      const filterBy = {
        txt: req.query.txt || ''
      }
      const products = await productsService.query(filterBy)
      res.json(products)
    } catch (err) {
      logger.error('Failed to get products', err)
      res.status(500).send({ err: 'Failed to get products' })
    }
  }

async function addProduct(req, res) {
    try {
      const product = req.body
      const addedProduct = await productsService.add(product)
      res.json(addedProduct)
    } catch (err) {
      logger.error('Failed to add product', err)
      res.status(500).send({ err: 'Failed to add product' })
    }
  }

async function getProductById(req, res) {
    try {
      const productId = req.params.id
      const product = await productsService.getById(productId)
      res.json(product)
    } catch (err) {
      logger.error('Failed to get product', err)
      res.status(500).send({ err: 'Failed to get product' })
    }
  }
  
  async function updateProduct(req, res) {
    try {
      const product = req.body
      const updatedProduct = await productsService.update(product)
      res.json(updatedProduct)
    } catch (err) {
      logger.error('Failed to update product', err)
      res.status(500).send({ err: 'Failed to update product' })
  
    }
  }
  
  async function removeProduct(req, res) {
    try {
      const productId = req.params.id
      const removedId = await productsService.remove(productId)
      res.send(removedId)
    } catch (err) {
      logger.error('Failed to remove product', err)
      res.status(500).send({ err: 'Failed to remove product' })
    }
  }
  

module.exports = {
    getProducts,
    addProduct,
    getProductById,
    updateProduct,
    removeProduct  
}