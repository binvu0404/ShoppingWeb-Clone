const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 4000

const route = require('./routes')
const db = require('./config/db')

//connect to DB

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

app.listen(port, () => console.log(`Server listening in http://localhost:${port}/...`))
