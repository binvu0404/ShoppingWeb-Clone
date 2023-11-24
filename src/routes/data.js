const express = require('express')
const router = express.Router();

const dataController = require('../app/controllers/DataController');

router.use('/news', dataController.news);
router.use('/', dataController.index);

module.exports = router
