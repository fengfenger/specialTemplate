import BannerModel from '../models/banner.model.js';
// 引入模板方法
var template = require('../utils/temptest.js');
import listTemp from './template/banner-show-tpl.html';

var bannerView = Backbone.View.extend({
    el: '#app',
    events: {

    },
    compileHTML:function(tplStr,data){
		return template.compile(tplStr)(data);
	},
    initialize: function() {
        const items = [
            '点击→播放专题页呈现，包括两侧挂幅前贴片',
            'MV播放',
            '核心模块'
        ];
        this.bannerModel = new BannerModel();

        this.$el.html(this.compileHTML(listTemp,{items:items}))
    },
    render: function() {
        
    }
});

module.exports = bannerView;
