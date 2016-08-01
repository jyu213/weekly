'use strict';

const CONSTANT = require('../config/constant');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

const WEEKLY_LIST_TABLE = 'weekly_list';

exports.list = function *() {
    db.serialize(function() {
        // @TODO: pager 
        const getListSql = `SELECT * FROM ${WEEKLY_LIST_TABLE}`;
        db.all(getListSql, (err, rows) => {
            console.log(err, rows);
            if (err) {
                // yield
            }
            yield rows;
        });
    });

    db.close();
};