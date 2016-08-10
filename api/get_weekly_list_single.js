'use strict';

const getWeeklyList = require('../service/get_weekly_single');

/**
 * @API: get weekly list api
 */
exports.list = function *() {
    const id = this.request.query.id;

    // @TODO: error
    let data = yield getWeeklyList.single(id);
    let res = {
        success: true,
        data: data
    };
    this.body = res;
};
