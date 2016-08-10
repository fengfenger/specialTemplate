// 引入zepto的promise对象
import Deferred from 'deferred';
import callbacks from 'callbacks';

var ajax = function(url,data,delay) {
    var self = this;
    var defer = $.Deferred();
    data = $.extend({
        deviceinfo: '{"aid":"30001001"}',
    }, data || {});

    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: delay,
        beforeSend: function(xhr, settings) {
            // 暂时保留 设置头部信息
        },
        success: function(response, state, xhr) {
            defer.resolve(response, state, xhr);
        },
        error: function(xhr, state, errors) {
            defer.reject(xhr, state, errors);
        },
        complete: function(xhr, status) {
            //请求完成
        }
    });
    return defer.promise();
}
module.exports = ajax;
