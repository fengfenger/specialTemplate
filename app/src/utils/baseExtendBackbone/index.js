// backbone基类拓展

var BaseView = require('./instance/baseView.js');
var BaseModel = require('./instance/baseModel.js');
module.exports = {
    'Model': BaseModel,
    'View': BaseView
};
