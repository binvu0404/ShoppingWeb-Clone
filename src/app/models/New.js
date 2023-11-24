const mongoose = require('mongoose')
const Schema = mongoose.Schema

const New = new Schema({
    title: { type: String, manxLength: 255, index: true, unique: true },
    images: { type: Array, manxLength: 10 },
    content: { type: Array},
    author: { type: String, manxLength: 255 },
    slug: { type: String, manxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('New', New)
