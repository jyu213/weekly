'use strict';

const CONSTANT = require('../config/constant');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

const WEEKLY_LIST_TABLE = 'weekly_list';


db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS ${WEEKLY_LIST_TABLE} (ID INTEGER PRIMARY KEY, USER_ID TEXT, PROJECT_CREATE_DATE TEXT, PROJECT_PROGRESS TEXT, PROJECT_TAG TEXT, NEXT_WEEK_PLAN TEXT, PROJECT_TITLE TEXT, PROJECT_LINK TEXT, DESCRIPTION TEXT, SUB_PROJECT TEXT, CREATE_TIME TEXT, UPDATE_TIME TEXT)`);

    let time = (new Date()).getTime();

    for(let i = 0; i < 5; i++) {
        db.run(`INSERT INTO ${WEEKLY_LIST_TABLE} VALUES ($id, $userId, $project_create_date,
            $project_progress, $project_tag, $nextWeekPlan, $project_title, $project_link, 
            $description, $sub_project, $createTime, $modifyTime)`, {
            $userId: '01',
            $project_create_date: '2016-07-31',
            $project_progress: '10%',
            $project_tag: '已移交', 
            $nextWeekPlan: '无',
            $project_title: 'test title',
            $project_link: null,
            $description: 'desc',
            $subProject: 'list-web',
            $createTime: time,
            $modifyTime: time
        }, (err) => {
            console.log(err);
        });
    }
});

db.close();