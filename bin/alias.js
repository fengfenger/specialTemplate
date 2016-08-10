/**
 * Created by caoxifeng on.
 */

var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
    config: path.resolve(containerPath,'./app/src/utils/config'),
    tplEng: path.resolve(containerPath,'./app/link/artTemplate/dist/template'),
    deferred:path.resolve(containerPath,'./app/src/utils/zepto/deferred'),
    callbacks:path.resolve(containerPath,'./app/src/utils/zepto/callbacks')
};
module.exports = alias;
