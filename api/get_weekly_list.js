'use strict';

const getWeeklyList = require('../service/get_weekly_list');

/**
 * @API: get weekly list api
 */
exports.list = function *() {
    // this.set('access-control-allow-origin', '*');
    const params = this.request.query;

    // @TODO: error
    let data = yield getWeeklyList.list(params);
    let res = {
        success: true,
        data: data
    };
    this.body = res;
};
