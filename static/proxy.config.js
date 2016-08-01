// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  'GET /service/*': 'http://127.0.0.1:3000/',
  '/api/lists': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [{
            id: '1',
            title: '胡彦斌',
            subPorject: '32XX',
            description: '西湖区湖底公园1号',
          }, {
            id: '2',
            title: '胡彦祖',
            subPorject: '42XX',
            description: '西湖区湖底公园1号',
          }, {
            id: '3',
            title: '李大嘴',
            subPorject: '32XX',
            description: '西湖区湖底公园1号',
          }],
      });
    }, 500);
  },
};