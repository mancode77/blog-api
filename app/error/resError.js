'use strict'

const requiretmentCheck = function (res, data) {
    if (!data.length) {
        const response = {
            took: "404",
            "status": "EMPTY DATA",
            "data": null,
            "error": {
                message: "Data input cannot be empty!"
            }
        };

        res.json(response);
    } else {
        const response = {
            took: "404",
            "status": "DATA SHORT",
            "data": null,
            "error": {
                message: "Data input is too short, minimum 5 character!"
            }
        };

        res.json(response);
    }
}

const errorSQL = function (res, err = null) {
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

const existOrNotExistData = function (res, category = null, status = 'EMPTY DATA', message = 'Data is not exists!') {
    const response = {
        took: "404",
        "status": status,
        "data": null,
        "error": {
            message: message
        }
    };

    res.json(response);
}

module.exports = { requiretmentCheck, errorSQL, existOrNotExistData };