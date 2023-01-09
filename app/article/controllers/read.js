'use strict'

const { json } = require('express');
const { conn } = require('../../../database');

const read = function (req, res) {
    let { limit = 10, skip = 0 } = req.query;

    const querySelect = `
    SELECT 
    articles.id as id,
    categories.name as category,
    articles.title as title,
    articles.author as author,
    articles.content as content,
    articles.created_at as created_at,
    articles.updated_at as updated_at
    FROM articles
    JOIN categories
    ON (articles.id_category = categories.id)
    ORDER BY id DESC LIMIT ?, ?`;

    const pagination = [Number(skip), Number(limit)];

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
        }

        const dataRes = JSON.parse(JSON.stringify(rows));

        const response = {
            took: 200,
            "status": "OK",
            "data": [
                ...dataRes,
                {
                    length: dataRes.length
                }
            ],
            "error": null
        };

        res.json(response);
    }

    conn.query(querySelect, pagination, callbackQuerySelect);
}

module.exports = { read };