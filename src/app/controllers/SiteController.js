
class SiteController {
    //[GET] /
    index(req, res, next) {
        res.render('home')
    }

    //[GET] /search
    search(req, res, next) {
        res.send('search page')
    }

    
}

module.exports = new SiteController()
