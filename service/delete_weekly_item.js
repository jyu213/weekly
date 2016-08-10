'use strict';

const CONSTANT = require('../config/constant');
const WEEKLY_LIST_TABLE = 'weekly_list';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

/** 
 * @Service: 删除单个项目
 * 
 * @param {String} id, 项目 ID
 */
exports.delete = function *(id) {
    const SQL = `delete from weekly_list where id=${id}`;
    let promise = new Promise((resolve, reject) => {
        if (typeof(id) === 'undefined') {
            reject('miss param id');
        }
        db.serialize(() => {
            db.run(SQL, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    });

    return promise;
};