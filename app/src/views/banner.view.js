var base = require('base');
var BaseView = base.View;

import BannerModel from '../models/banner.model.js';
import listTemp from './template/banner-show-tpl.html';

var bannerView = BaseView.extend({
    el: '#app',
    events: {

    },
    initialize: function() {
        this.bannerModel = new BannerModel();
        var promise = this.bannerModel.executeJSONP({deviceinfo: '{"aid":"30001001"}'});
        var self = this;
        promise.done(function(response){
            console.log(self.bannerModel.get('data'));
        });
    },
    render: function() {
        this.$el.html(this.compileHTML(listTemp,{bannerData:this.bannerModel.get('bannerData')}))
    }
});

module.exports = bannerView;
