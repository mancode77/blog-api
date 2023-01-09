'use strict';

var _require = require('./create'),
  create = _require.create;
var _require2 = require('./read'),
  read = _require2.read;
var _require3 = require('./destroy'),
  destroy = _require3.destroy;
var _require4 = require('./update'),
  update = _require4.update;
module.exports = {
  create: create,
  read: read,
  destroy: destroy,
  update: update
};