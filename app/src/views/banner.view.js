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
        this.$el.html(this.compileHTML(listTemp,{bannerData:this.bannerModel.get('bannerData')}))
    }
});

module.exports = bannerView;
