'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/weekly');

const WEEKLY_LIST_TABLE = 'weekly_list';

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS ${WEEKLY_LIST_TABLE} (ID INTEGER PRIMARY KEY, userId TEXT, project_create_date TEXT, project_progress TEXT, project_title TEXT, project_link TEXT, description TEXT, createTime TEXT, modifyTime TEXT)`);

    let time = (new Date()).getTime();
    db.run(`INSERT INTO ${WEEKLY_LIST_TABLE} VALUES ($id, $userId, $project_create_date,
        $project_progress, $project_title, $project_link, $description, $createTime, $modifyTime)`, {
        $userId: '01',
        $project_create_date: '2016-07-31',
        $project_progress: '10%',
        $project_title: 'test title',
        $project_link: null,
        $description: 'desc',
        $createTime: time,
        $modifyTime: time
    }, (err) => {
        console.log(err);
    });
});

db.close();