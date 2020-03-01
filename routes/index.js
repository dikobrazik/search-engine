var express = require('express');
var router = express.Router();

const find = require('../controllers/search-engine');

/* GET home page. */
router.get('/', function(req, res, next) {
  const { search } = req.query
  res.render('index', { title: 'Express', users: find(search ? search : '') });
});

module.exports = router;
