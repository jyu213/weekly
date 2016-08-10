'use strict';

const createWeeklyList = require('../service/create_weekly_list');
const updateWeeklyList = require('../service/update_weekly_single');
const getSingle = require('../service/get_weekly_single');

/**
 * @API: create weekly list item api
 */
exports.create = function *() {
    const params = this.request.query;
    const id = params.id;
    let paramsMap = Object.assign({}, param, {
        userId: '01'
    });
    let data;

    // @REVIEW: 整合新增与更新接口，简单通过 id 是否传递判断
    if (typeof(id) !== 'undefined') {
        data = yield updateWeeklyList.update(paramsMap);
    } else {
        data = yield createWeeklyList.create(paramsMap);
    }
    
    // @TODO: error
    let res = {
        success: true,
        data: data
    };
    this.body = res;
};