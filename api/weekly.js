'use strict';

const getWeeklyList = require('../service/get_weekly_list');

/** 
 * list api
 */
exports.list = function *() {
  // var result = yield request(requestURL);
  // var body = result.body;

  console.log( getWeeklyList.list );
  let resData = {
      a: 1,
      b: 'string'
  };
  this.body = JSON.stringify(resData);
  // var data = JSON.parse(body);

//   this.render('index', data, true);

  // https.get(requestURL, function(data) {
  //   data.setEncoding('utf-8');
  //   var resData = [];

  //   data.on('data', function(chunk) {
  //     resData.push(chunk);
  //   }).on('end', function() {
  //     this.body = JSON.stringify(resData);
  //   }).on('error', function(err) {
  //     console.log(err);
  //   });
  // });

};
