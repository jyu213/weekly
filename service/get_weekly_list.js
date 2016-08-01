'use strict';

const CONSTANT = require('../config/constant');
const WEEKLY_LIST_TABLE = 'weekly_list';
const GET_LIST_SQL = `SELECT * FROM ${WEEKLY_LIST_TABLE}`;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

/*
 * @Service: get weekly list
 */
exports.list = function *() {
    let promise = new Promise((resolve, reject) => {
        let result = [];
        db.serialize(() => {
            // @TODO: pager
            db.all(GET_LIST_SQL, (err, rows) => {
                if (err) {
                    reject([]);
                }
                resolve(rows);
            });
        });
    })

    return promise;
};
