/**
 * @time 2012年10月26日
 * @author icepy
 * @info 完成warn包装
 */

'use strict';

var log = require('./log.js');

var warn = function(msg,e){
	log.warn(msg,e);
}
module.exports = warn;
