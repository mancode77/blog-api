'use strict';

var path = require('path');
var dotenv = require('dotenv');
dotenv.config();
module.exports = {
  rootPath: path.resolve(__dirname, '..'),
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME
};