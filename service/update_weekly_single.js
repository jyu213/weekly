'use strict';

const CONSTANT = require('../config/constant');
const WEEKLY_LIST_TABLE = 'weekly_list';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(CONSTANT.DBPATH);

/** 
 * @Service: 更新单个项目
 * 
 * @param {String} id, 变更项目ID
 * @param {String} createTime, 项目创建时间，手动选择  
 * @param {String} projectProgress, 项目进度
 * @param {String} projectTag, 项目里程碑 
 * @param {String} nextWeekPlan, 下周计划
 * @param {String} projectTitle, 标题
 * @param {String} projectLink, 链接
 * @param {String} description, 描述
 * @param {String} subProject, 依赖子项目
 */
exports.update = function *(id, params = {}) {
    let promise = new Promise((resolve, reject) => {
        db.serialize(() => {
            const { createTime, projectProgress, projectTag, projectLink, nextWeekPlan, projectTitle, description, subProject } = params;
            const currentTime = (new Date()).getTime();

            if (typeof(id) === 'undefined') {
                reject('miss param id');
            }
            
            let sqlArr = param.keys().length > 0 ? [`UPDATE_TIME=${currentTime}`] : [];

            Object.entries(param).map((item, key) => {
                switch (item[0]) {
                    case 'createTime':
                        sqlArr.push(`PROJECT_CREATE_DATE=${item[1]}`);
                        break;
                    case 'projectProgress':
                        sqlArr.push(`PROJECT_PROGRESS=${item[1]}`);
                        break;
                    case 'projectTag':
                        sqlArr.push(`PROJECT_TAG=${item[1]}`);
                        break;
                    case 'nextWeekPlan':
                        sqlArr.push(`NEXT_WEEK_PLAN=${item[1]}`);
                        break;
                    case 'projectTitle':
                        sqlArr.push(`PROJECT_TITLE=${item[1]}`);
                        break;
                    case 'projectLink':
                        sqlArr.push(`PROJECT_LINK=${item[1]}`);
                        break;
                    case 'description':
                        sqlArr.push(`DESCRIPTION=${item[1]}`);
                        break;
                    case 'subProject':
                        sqlArr.push(`SUB_PROJECT=${item[1]}`);
                        break;
                }
            });
            const SQL = `SELECT * FROM ${WEEKLY_LIST_TABLE} SET ${sqlArr.join(' AND ')} WHERE ID=${id}`;

            // @TODO: update params optioms
            db.run(SQL,(err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    });

    return promise;
};