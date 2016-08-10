'use strict';
// url 的配置
var Config = require('config');
var env = Config.env[Config.scheme];

import ajax from '../utils/ajax.js';

var bannerModel = Backbone.Model.extend({
    url: env.url_prefix + '/home/video_rec.json',
    defaults: {
        title: '我是banner内容的标题',
        bannerData: [{
            'a': '111111'
        }, {
            'b': '222222'
        }, {
            'c': '333333'
        }, {
            'd': '4444444'
        }]
    },
    // 定义一些方法
    executeJSONP: function(data,delay) {
        return ajax(this.url,data,delay);
    }
});

module.exports = bannerModel;
