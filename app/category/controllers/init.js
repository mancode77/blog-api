'use strict'

const { create } = require('./create');
const { read } = require('./read');
const { destroy } = require('./destroy');
const { update } = require('./update');

module.exports = { create, read, destroy, update };