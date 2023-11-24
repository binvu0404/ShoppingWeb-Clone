const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dirtycoins_dev'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log('Connect successful!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }
