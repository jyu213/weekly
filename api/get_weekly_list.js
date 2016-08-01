'use strict';

const getWeeklyList = require('../service/get_weekly_list');

/**
 * @API: get weekly list api
 */
exports.list = function *() {
  this.set('access-control-allow-origin', '*');
  // @TODO: error
  let data = yield getWeeklyList.list;


  let newData = data.map((item) => {
    return {
      id: item.ID,
      title: item.project_title,
      date: item.project_create_date,
      progress: item.project_progress,
      link: item.project_link,
      userId: item.userId,
      description: item.description
    };
  });
  let res = {
    success: true,
    data: newData
  };
  this.body = res;
};
