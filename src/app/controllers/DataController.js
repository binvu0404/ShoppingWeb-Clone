const Product = require('../models/Product')
const New = require('../models/New')

class DataController {
    //[GET] /data

    index(req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true)

        Product.find({})
            .then((product) => res.send(product))
            .catch(next)
    }

    //[GET] /data/news

    news(req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true)

        New.find({})
            .then((news) => res.send(news))
            .catch(next)
    }
}

module.exports = new DataController()
