// backbone基类拓展

var BaseView = require('./backboneExpand/baseView.js');
var BaseModel = require('./backboneExpand/baseModel.js');
module.exports = {
    'Model': BaseModel,
    'View': BaseView
};
