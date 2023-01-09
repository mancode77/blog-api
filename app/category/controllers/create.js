'use strict'

const { conn } = require('../../../database');
const { requiretmentCheck } = require('./../../error/resError');

const create = function (req, res) {
    const { name } = req.body;

    if (!name.length || name.length < 5) {
        requiretmentCheck(res, name);
    } else {
        const queryInsert = 'INSERT INTO categories (name) VALUES ?';

        const callbackQueryInsert = function (err) {
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
                    status: "OK",
                    data: { ...req.body },
                    error: null
                };

                res.json(response);
            }
        }

        conn.query(queryInsert, [[[name]]], callbackQueryInsert);
    }
}

module.exports = { create };