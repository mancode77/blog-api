'use strict'

const { conn } = require('../../../database');
const { requiretmentCheck, errorSQL, existOrNotExistData } = require('./../../error/resError');

const create = function (req, res) {
    const {
        category,
        title,
        author,
        content
    } = req.body;

    const querySelect = 'SELECT id FROM categories WHERE name = ?';

    const callbackQuerySelect = function (err, row) {
        if (err) {
            errorSQL(res, err);
        } else if (!row.length) {
            existOrNotExistData(res, row, 'EMPTY CATEGORY', 'Category is not exists!');
        } else {

            const queryInsert = 'INSERT INTO articles (id_category, title, author, content) VALUES ?';

            const dataArticle = [[[
                row[0].id,
                title,
                author,
                content
            ]]];

            const callbackQueryInsert = function (err) {
                if (err) {
                    errorSQL(res, err);
                }

                const response = {
                    took: 200,
                    status: "OK",
                    data: { ...req.body },
                    error: null
                };

                res.json(response);
            }

            conn.query(queryInsert, dataArticle, callbackQueryInsert);
        }
    }

    conn.query(querySelect, category, callbackQuerySelect);
};


module.exports = { create };