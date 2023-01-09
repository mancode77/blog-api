'use strict'

const { conn } = require('../../../database');
const { errorSQL, existOrNotExistData } = require('./../../error/resError');

const destroy = function (req, res) {
    const { id } = req.params;

    const querySelect = 'SELECT * FROM categories WHERE id = ?'

    const callbackQuerySelect = function (err, row) {
        if (err) {
            errorSQL(res, err);
        } else if (!row.length) {
            existOrNotExistData(res, row);
        } else {
            const queryDelete = 'DELETE FROM categories WHERE id = ?';
            const callbackQueryDelete = function (err) {
                if (err) {
                    errorSQL(res, err);
                } else {
                    const response = {
                        took: 200,
                        status: "OK",
                        data: {
                            message: "Delete category success"
                        },
                        error: null
                    };

                    res.json(response);
                }
            }

            conn.query(queryDelete, id, callbackQueryDelete);
        }
    }

    conn.query(querySelect, id, callbackQuerySelect);
}

module.exports = { destroy };