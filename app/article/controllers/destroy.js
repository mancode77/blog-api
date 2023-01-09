'use strict'

const { conn } = require('../../../database');
const { errorSQL, existOrNotExistData } = require('./../../error/resError');


const destroy = function (req, res) {
    const { id } = req.params;

    const querySelect = 'SELECT * FROM articles WHERE id = ?'

    const callbackQuerySelect = function (err, row) {
        if (err) {
            errorSQL(res, err);
        } else if (!row.length) {
            existOrNotExistData(res, row);
        } else {
            const queryDelete = 'DELETE FROM articles WHERE id = ?';

            const callbackQueryDelete = function (err) {
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
                }

                const response = {
                    took: 200,
                    status: "OK",
                    data: {
                        message: "Delete article success"
                    },
                    error: null
                };

                res.json(response);
            }

            conn.query(queryDelete, id, callbackQueryDelete);
        }
    }

    conn.query(querySelect, id, callbackQuerySelect);
}

module.exports = { destroy };