'use strict';
// url 的配置
var Config = require('config');
var env = Config.env[Config.scheme];

var base = require('base');
var BaseModel = base.Model;

var Model = BaseModel.extend({
    url: '{{url_prefix}}/home/video_rec.json',
    beforeEmit: function beforeEmit() {
        // 给请求地址替换一下环境变量
        if (/^\{{0,2}(url_prefix)\}{0,2}/.test(this.url)) {
            this.url = this.url.replace('{{url_prefix}}', env.url_prefix);
        }
    },
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
});


var shared = null;
Model.sharedInstanceModel = function sharedInstanceModel() {
    if (!shared) {
        shared = new Model();
    }
    return shared;
};

module.exports = Model;
