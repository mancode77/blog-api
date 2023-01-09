'use strict'

const { conn } = require('../../../database');

const read = function (req, res) {
    const querySelect = 'SELECT * FROM categories';

    const callbackQuerySelect = function (err, rows) {
        if (err) {
            //* Developer debug
            console.error({
                sqlMessage: err.sqlMessage,
                sql: err.sql
            });

            //* Error
            const response = {
                took: "500",
                "status": "SERVER ERROR",
                "data": null,
                "error": {
                    message: "500 SERVER ERROR"
                }
            };

            res.json(response);
        } else {
            const response = {
                took: 200,
                "status": "OK",
                "data": [...rows],
                "error": null
            };

            res.json(response);
        }
    }

    conn.query(querySelect, callbackQuerySelect);
}

module.exports = { read };