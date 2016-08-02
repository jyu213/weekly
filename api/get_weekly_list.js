'use strict';

const getWeeklyList = require('../service/get_weekly_list');

/**
 * @API: get weekly list api
 */
exports.list = function *() {
    this.set('access-control-allow-origin', '*');
    // @TODO: error
    let data = yield getWeeklyList.list;
    let res = {
        success: true,
        data: data
    };
    this.body = res;
};
