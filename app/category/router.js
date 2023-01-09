'use strict'

var express = require('express');
var router = express.Router();
const { create, read, update, destroy } = require('./controllers/init');

router.get('/categories', read);

router.post('/categories', create);

router.put('/categories/:id', update);

router.delete('/categories/:id', destroy);

module.exports = router;