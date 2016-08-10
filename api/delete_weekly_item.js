'use strict';

const createWeeklyList = require('../service/delete_weekly_list');

/**
 * @API: delete weekly list item api
 */
exports.delete = function *() {
    const id = this.request.query.id;
    
    // @TODO: error
    let data = yield deleteWeeklyList.delete(id);
    let res = {
        success: true,
        data: data
    };
    this.body = res;
};