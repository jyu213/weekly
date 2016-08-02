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
                    // @TODO: echo error message
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
    })

    return promise;
};
