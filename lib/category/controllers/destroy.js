'use strict';

var _require = require('../../../database'),
  conn = _require.conn;
var destroy = function destroy(req, res) {
  var id = req.params.id;
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
    var queryDelete = 'DELETE FROM categories WHERE id = ?';
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
          message: "Delete category success"
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