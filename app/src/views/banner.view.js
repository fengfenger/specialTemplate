import BannerModel from '../models/banner.model.js';
// 模板的方法
import template from 'tplEng';
import listTemp from './template/banner-show-tpl.html';

var bannerView = Backbone.View.extend({
    el: '#app',
    events: {

    },
    compileHTML:function(tplStr,data){
		return template.compile(tplStr)(data);
	},
    initialize: function() {
        this.bannerModel = new BannerModel();
    },
    render: function() {
        const items = [
            '点击→播放专题页呈现，包括两侧挂幅前贴片',
            'MV播放是是是',
            '核心模块'
        ];
        this.$el.html(this.compileHTML(listTemp,{items:items}))
    }
});

module.exports = bannerView;
