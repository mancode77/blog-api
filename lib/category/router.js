'use strict';

var express = require('express');
var router = express.Router();
var _require = require('./controllers/init'),
  create = _require.create,
  read = _require.read,
  update = _require.update,
  destroy = _require.destroy;
router.get('/articles', read);
router.post('/articles', create);
router.put('/articles:id', update);
router["delete"]('/articles/:id', destroy);
module.exports = router;