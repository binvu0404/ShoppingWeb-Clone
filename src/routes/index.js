const newsRouter = require('./news');
const siteRouter = require('./site');
const dataRouter = require('./data');

function route(app) {
    // app.get('/', (req, res) => res.render('home'))

    app.use('/news', newsRouter);
    app.use('/data', dataRouter);
    app.use('/', siteRouter);
}

module.exports = route
