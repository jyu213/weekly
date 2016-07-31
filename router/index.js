'use strict';
/**
 * List index
 */
// var request = require("co-request");

// // App 列表
// var appList = ['Day+one'];

// // 搜索配置项
// var searchConfig = {
//   term: appList.join(''),
//   media: 'software',
//   limit: 1
// };
// var basicURL = 'https://itunes.apple.com/search?';
// var requestURL = basicURL + parseURL(searchConfig);

exports.index = function *() {
  // var result = yield request(requestURL);
  // var body = result.body;
  let data = 'test code success';

  // var data = JSON.parse(body);

  this.render('index', data, true);

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
