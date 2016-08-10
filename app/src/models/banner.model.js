'use strict';
// url 的配置
var Config = require('config');
var env = Config.env[Config.scheme];

// 引入zepto的promise对象
import Deferred from 'deferred';
import callbacks from 'callbacks';

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
        var self = this;
        var defer = $.Deferred();
        data = $.extend({
            deviceinfo: '{"aid":"30001001"}',
        }, data || {});

        $.ajax({
            type: 'GET',
            url: self.url,
            data: data,
            dataType: 'jsonp',
            jsonp: 'callback',
            timeout: 300,
            beforeSend: function(xhr, settings) {
                // 暂时保留
            },
            success: function(response, state, xhr) {
                defer.resolve(response, state, xhr);
            },
            error: function(xhr, state, errors) {
                defer.reject(xhr, state, errors);
            },
            complete: function(xhr, status) {
                //请求完成
            }
        });
        return defer.promise();
    }
});

module.exports = bannerModel;
