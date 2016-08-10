'use strict';

const CONSTANT = require('../config/constant');
const WEEKLY_LIST_TABLE = 'weekly_list';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

/*
 * @Service: get weekly single info
 * 
 * @param {String} id, 查询 ID 
 */
exports.single = function *(id) {
    const SQL = `SELECT * FROM ${WEEKLY_LIST_TABLE} WHERE ID='${id}'`;
    let promise = new Promise((resolve, reject) => {
        if (typeof(id) === 'undefined') {
            reject('miss param');
        }
        db.serialize(() => {
            db.get(SQL, (err, rows) => {
                // @TODO: error
                if (err) {
                    reject([]);
                }
                let data = rows.map((item) => {
                    return {
                        id: item.ID,
                        user_id: item.USER_ID,
                        title: item.PROJECT_TITLE,
                        date: item.PROJECT_CREATE_DATE,
                        progress: item.PROJECT_PROGRESS,
                        tag: item.PROJECT_TAG,
                        next_week_plan: item.NEXT_WEEK_PLAN, 
                        link: item.PROJECT_LINK,
                        description: item.DESCRIPTION,
                        sub_project: item.SUB_PROJECT,
                        create_time: item.CREATE_TIME,
                        update_time: item.UPDATE_TIME
                    };
                }) || [];
                resolve(data);
            });
        });
    });

    return promise;
};
