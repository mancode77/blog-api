'use strict'

const { conn } = require('../../../database');
const { requiretmentCheck, errorSQL, existOrNotExistData } = require('./../../error/resError');


const update = function (req, res) {
    const { id } = req.params;

    const {
        category,
        title,
        author,
        content
    } = req.body;

    const querySelect = 'SELECT * FROM articles WHERE id = ?'

    const callbackQuerySelect = function (err, row) {
        if (err) {
            errorSQL(res, err);
        } else if (!row.length) {
            existOrNotExistData(res, row);
        } else {

            const querySelectCategory = 'SELECT id FROM categories WHERE name = ?';

            const callbackQueryCategory = function (err, row) {
                if (err) {
                    errorSQL(res, err);
                }

                const queryUpdate = `
                    UPDATE articles SET
                    id_category = ?,
                    title = ?,
                    author = ?,
                    content = ?
                    WHERE id = ?
                `;

                const callbackQueryUpdate = function (err) {
                    if (err) {
                        //* Developer debug
                        console.error({
                            sqlMessage: err.sqlMessage,
                            sql: err.sql
                        });

                        //* Error
                        const response = JSON.stringify({
                            took: "500",
                            "status": "SERVER ERROR",
                            "data": null,
                            "error": {
                                message: "500 SERVER ERROR"
                            }
                        });

                        res.json(response);
                    }

                    const response = {
                        took: 200,
                        status: "OK",
                        data: { ...req.body },
                        error: null
                    };

                    res.json(response);
                }

                conn.query(queryUpdate, [row[0].id, title, author, content, id], callbackQueryUpdate);
            }

            conn.query(querySelectCategory, category, callbackQueryCategory);
        }
    }

    conn.query(querySelect, id, callbackQuerySelect);
}

module.exports = { update };