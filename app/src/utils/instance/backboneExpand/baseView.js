// 模板的方法
import template from 'tplEng';

var BaseView = Backbone.View.extend({
    test:function(){
        console.log('this is test plugin');
    },
    compileHTML:function(tplStr,data){
        return template.compile(tplStr)(data);
    }
});

module.exports = BaseView;
