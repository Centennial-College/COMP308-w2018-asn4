const router = require('express').Router();
const index = require('../controllers/index.server.controller');

router.route('/')
    .get((req, res) => res.render('index.ejs'));

router.post('/api/items', index.render);

module.exports = router;