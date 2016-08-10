// 引入zepto的promise对象
import Deferred from 'deferred';
import callbacks from 'callbacks';

var ajax = function(url, parameter, delay, options,deferred) {

    var defer = deferred;

    // 默认的参数
    parameter = $.extend({
        deviceinfo: '{"aid":"30001001"}',
    }, parameter || {});

    var tt= $.ajax($.extend({
        url: url,
        data: parameter,
        dataType: 'jsonp',
        jsonp: 'callback'
    }, options));

    return defer.promise();
}
module.exports = ajax;




// var self = this;
// var defer = $.Deferred();
// data = $.extend({
//     deviceinfo: '{"aid":"30001001"}',
// }, data || {});




// $.ajax({
//     type: 'GET',
//     url: url,
//     data: data,
//     dataType: 'jsonp',
//     jsonp: 'callback',
//     timeout: delay,
//     beforeSend: function(xhr, settings) {
//         // 暂时保留 设置头部信息
//
//     },
//     success: function(response, state, xhr) {
//         defer.resolve(response, state, xhr);
//     },
//     error: function(xhr, state, errors) {
//         defer.reject(xhr, state, errors);
//     },
//     complete: function(xhr, status) {
//         //请求完成
//     }
// });
