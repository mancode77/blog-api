'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _require = require('../../../database'),
  conn = _require.conn;
var update = function update(req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var querySelect = 'SELECT * FROM categories WHERE id = ?';
  var callbackQuerySelect = function callbackQuerySelect(err, row) {
    if (err) {
      //* Developer debug
      console.error({
        sqlMessage: err.sqlMessage,
        sql: err.sql
      });

      //* Error
      var response = JSON.stringify({
        took: "500",
        "status": "SERVER ERROR",
        "data": null,
        "error": {
          message: "500 SERVER ERROR"
        }
      });
      res.json(response);
    }
    var queryUpdate = 'UPDATE categories SET name = ? WHERE id = ?';
    var callbackQueryUpdate = function callbackQueryUpdate(err) {
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
        status: "OK",
        data: _objectSpread({}, req.body),
        error: null
      });
      res.json(response);
    };
    conn.query(queryUpdate, [name], callbackQueryUpdate);
  };
  conn.query(querySelect, id, callbackQuerySelect);
};
module.exports = {
  update: update
};