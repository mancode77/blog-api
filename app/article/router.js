'use strict'

const os = require('os');
var express = require('express');
var router = express.Router();
const { create, read, update, destroy } = require('./controllers/init');
const multer = require('multer');

router.get('/articles', read);

router.post('/articles', create);

router.put('/articles/:id', update);

router.delete('/articles/:id', destroy);

module.exports = router;