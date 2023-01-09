'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _require = require('../../../database'),
  conn = _require.conn;
var read = function read(req, res) {
  var _req$quey = req.quey,
    _req$quey$limit = _req$quey.limit,
    limit = _req$quey$limit === void 0 ? 10 : _req$quey$limit,
    _req$quey$skip = _req$quey.skip,
    skip = _req$quey$skip === void 0 ? 0 : _req$quey$skip;
  var querySelect = 'SELECT * FROM article';
  var pagination = [skip, limit];
  var callbackQuerySelect = function callbackQuerySelect(err, rows) {
    if (err) {
      //* Developer debug
      console.error({
        sqlMessage: err.sqlMessage,
        sql: err.sql
      });

      //* Error
      var _response = JSON.stringify({
        took: "500",
        "status": "SERVER ERROR",
        "data": null,
        "error": {
          message: "500 SERVER ERROR"
        }
      });
      res.json(_response);
    }
    var response = JSON.stringify({
      took: 200,
      "status": "OK",
      "data": _toConsumableArray(rows),
      "error": null
    });
    res.json(response);
  };
  conn.query(querySelect, pagination, callbackQuerySelect);
};
module.exports = {
  read: read
};