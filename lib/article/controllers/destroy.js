'use strict';

var fs = require('fs');
var _require = require('../../../database'),
  conn = _require.conn;
var _require2 = require('./../../config'),
  rootPath = _require2.rootPath;
var destroy = function destroy(req, res) {
  var id = req.params.id;
  var querySelect = 'SELECT * FROM articles WHERE id = ?';
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

    // * absoulte path
    var currentImage = "".concat(rootPath, "/public/upload/").concat(row[0].image);

    // * check absolute path
    if (fs.existsSync(currentImage)) {
      fs.unlinkSync(currentImage);
    }
    var queryDelete = 'DELETE FROM artciles WHERE id = ?';
    var callbackQueryDelete = function callbackQueryDelete(err) {
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
        data: {
          message: "Delete article success"
        },
        error: null
      });
    };
    conn.query(queryDelete, id, callbackQueryDelete);
  };
  conn.query(querySelect, id, callbackQuerySelect);
};
module.exports = {
  destroy: destroy
};