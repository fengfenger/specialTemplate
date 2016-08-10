var base = require('base');
var BaseView = base.View;

import BannerModel from '../models/banner.model.js';

import listTemp from './template/banner-show-tpl.html';

var bannerView = BaseView.extend({
    el: '#app',
    events: {

    },
    initialize: function() {
        this.test();
        this.bannerModel = new BannerModel();
        var promise = this.bannerModel.executeJSONP({});
        promise.done(function(response){
            console.log(response);
        });
    },
    render: function() {
        this.$el.html(this.compileHTML(listTemp,{bannerData:this.bannerModel.get('bannerData')}))
    }
});

module.exports = bannerView;
