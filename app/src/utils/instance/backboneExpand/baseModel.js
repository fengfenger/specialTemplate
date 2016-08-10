var Tools = require('tools');


var BaseModel = Backbone.Model.extend({

    initialize: function(options) {
        if (_.isFunction(this.beforeEmit)) {
            this.beforeEmit(options);
        };
        this._url = this.url;
    }

});



module.exports = BaseModel;
