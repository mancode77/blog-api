'use strict'

const { conn } = require('../../../database');
const { requiretmentCheck } = require('./../../error/resError');


const update = function (req, res) {
    const { id } = req.params;

    const { name } = req.body;

    if (!name.length || name.length < 5) {
        requiretmentCheck(res, name);
    } else {
        const querySelect = 'SELECT * FROM categories WHERE id = ?';

        const callbackQuerySelect = function (err, row) {
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
                const queryUpdate = 'UPDATE categories SET name = ? WHERE id = ?';

                const callbackQueryUpdate = function (err) {
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

                conn.query(queryUpdate, [name, id], callbackQueryUpdate);
            }
        }

        conn.query(querySelect, id, callbackQuerySelect);
    }
}

module.exports = { update };