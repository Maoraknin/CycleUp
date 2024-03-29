const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
const http = require('http').createServer(app)

// Product
// product

// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:8080'],
        credentials: true
    }
    app.use(cors(corsOptions))
}



// require all the routes
const productRoutes = require('./api/product/product.routes')

// The main route for the app
app.use('/api/product', productRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})

