webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(2);\n\nvar _bannerView = __webpack_require__(1);\n\nvar _bannerView2 = _interopRequireDefault(_bannerView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_bannerView2.default);\nnew _bannerView2.default().render();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2luZGV4LmpzPzA1YTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7Ozs7O0FBQ0EsUUFBUSxHQUFSO0FBQ0EsMkJBQWlCLE1BQWpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlc2hlZXRzL21haW4uc2Nzcyc7XG5pbXBvcnQgYmFubmVyVmlldyBmcm9tICcuL3ZpZXdzL2Jhbm5lci52aWV3LmpzJztcbmNvbnNvbGUubG9nKGJhbm5lclZpZXcpO1xubmV3IGJhbm5lclZpZXcoKS5yZW5kZXIoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3NyYy9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar bannerView = Backbone.View.extend({\n    el: '#app',\n    initialize: function initialize() {\n        console.log(this.$el);\n    },\n    render: function render() {\n        this.$el.html('<p>fdsafdsafdsafdsafdas</p>');\n    }\n});\n\nmodule.exports = bannerView;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3JjL3ZpZXdzL2Jhbm5lci52aWV3LmpzPzVlZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQyxJQUFJLGFBQWEsU0FBUyxJQUFULENBQWMsTUFBZCxDQUFxQjtBQUNsQyxRQUFJLE1BRDhCO0FBRWxDLGdCQUFZLHNCQUFXO0FBQ25CLGdCQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQWpCO0FBQ0gsS0FKaUM7QUFLbEMsWUFBUSxrQkFBVztBQUNoQixhQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsNkJBQWQ7QUFDRjtBQVBpQyxDQUFyQixDQUFqQjs7QUFVQSxPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiB2YXIgYmFubmVyVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICAgZWw6ICcjYXBwJyxcbiAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRlbCk7XG4gICAgIH0sXG4gICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwoJzxwPmZkc2FmZHNhZmRzYWZkc2FmZGFzPC9wPicpXG4gICAgIH1cbiB9KTtcblxuIG1vZHVsZS5leHBvcnRzID0gYmFubmVyVmlldztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL3NyYy92aWV3cy9iYW5uZXIudmlldy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzaGVldHMvbWFpbi5zY3NzP2Y5YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9zdHlsZXNoZWV0cy9tYWluLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
]);