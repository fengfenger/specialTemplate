 var bannerView = Backbone.View.extend({
     el: '#app',
     initialize: function() {
         console.log(this.$el);
     },
     render: function() {
        this.$el.html('<p>fdsafdsafdsafdsafdas</p>')
     }
 });

 module.exports = bannerView;
