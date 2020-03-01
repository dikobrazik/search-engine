var express = require('express');
var router = express.Router();

const find = require('../controllers/search-engine');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { search } = req.query;

  res.send(find(search));
  // res.send('respond with a resource');
});

module.exports = router;
