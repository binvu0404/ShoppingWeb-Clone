const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: { type: String, manxLength: 255, index: true, unique: true },
    price: { type: String, manxLength: 50 },
    size: { type: Array, manxLength: 10 },
    images: { type: Array, manxLength: 10 },
    tags: { type: Array, manxLength: 10 },
    info: { type: Object, manxLength: 50 },
    slug: { type: String, manxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Product', Product)
