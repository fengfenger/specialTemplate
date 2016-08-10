// 模板的方法
import template from 'tplEng';

var BaseView = Backbone.View.extend({
    findDOMNode: function(exprs) {
        return this.$el && this.$el.find(exprs);
    },
    compileHTML: function(tplStr, data) {
        return template.compile(tplStr)(data);
    }
});

module.exports = BaseView;
