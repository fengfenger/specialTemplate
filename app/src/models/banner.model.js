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
    executeJSONP: function(data) {
        // deferred的对象
        var defer = $.Deferred();
        var options = {
            beforeSend: function() {

            },
            success: function(response, state, xhr) {
                defer.resolve(response, state, xhr);
            },
            complete: function() {

            },
            error: function(xhr, state, errors) {
                defer.reject(xhr, state, errors);
            }
        };
        // 返回ajax的promise的对象
        return ajax(this.url,data,300,options,defer);
    }
});

module.exports = bannerModel;
