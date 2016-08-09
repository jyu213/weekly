'use strict';

const CONSTANT = require('../config/constant');
const WEEKLY_LIST_TABLE = 'weekly_list';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

/** 
 * userId,
 * createTime,
 * projectProgress,
 * projectTag, 
 * nextWeekPlan,
 * projectTitle,
 * projectLink,
 * description,
 * subProject
 */
exports.create = function *(params) {
    let promise = new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS ${WEEKLY_LIST_TABLE} (ID INTEGER PRIMARY KEY, USER_ID TEXT, PROJECT_CREATE_DATE TEXT, PROJECT_PROGRESS TEXT, PROJECT_TAG TEXT, NEXT_WEEK_PLAN TEXT, PROJECT_TITLE TEXT, PROJECT_LINK TEXT, DESCRIPTION TEXT, SUB_PROJECT TEXT, CREATE_TIME TEXT, UPDATE_TIME TEXT)`);

            let { userId, createTime, projectProgress, projectTag, projectLink, nextWeekPlan, projectTitle, description, subProject} = params;
            let currentTime = (new Date()).getTime();
            let data = {
                $userId: userId,
                $project_create_date: createTime,
                $project_progress: projectProgress,
                $project_tag: projectTag, 
                $nextWeekPlan: nextWeekPlan,
                $project_title: projectTitle,
                $project_link: projectLink,
                $description: description,
                $subProject: subProject,
                $createTime: currentTime,
                $modifyTime: currentTime
            };

            // @TODO: update params optioms
            db.run(`INSERT INTO ${WEEKLY_LIST_TABLE} VALUES ($id, $userId, $project_create_date,
                $project_progress, $project_tag, $nextWeekPlan, $project_title, $project_link, 
                $description, $sub_project, $createTime, $modifyTime)`, data, (err) => {
                // @TODO: ???
                // reject(err);
                console.log(err);
            });
        });
    });

    return promise;
}


// db.serialize(function() {
//     db.run(`CREATE TABLE IF NOT EXISTS ${WEEKLY_LIST_TABLE} (ID INTEGER PRIMARY KEY, USER_ID TEXT, PROJECT_CREATE_DATE TEXT, PROJECT_PROGRESS TEXT, PROJECT_TAG TEXT, NEXT_WEEK_PLAN TEXT, PROJECT_TITLE TEXT, PROJECT_LINK TEXT, DESCRIPTION TEXT, SUB_PROJECT TEXT, CREATE_TIME TEXT, UPDATE_TIME TEXT)`);

//     let time = (new Date()).getTime();

//     for(let i = 0; i < 5; i++) {
        
//     }
// });

// db.close();