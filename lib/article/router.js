'use strict';

var os = require('os');
var express = require('express');
var router = express.Router();
var _require = require('./controllers/init'),
  create = _require.create,
  read = _require.read,
  update = _require.update,
  destroy = _require.destroy;
var multer = require('multer');
router.get('/articles', read);
router.post('/articles', multer({
  dest: os.tmpdir()
}).single('image'), create);
router.put('/articles:id', multer({
  dest: os.tmpdir()
}).single('image'), update);
router["delete"]('/articles/:id', destroy);
module.exports = router;