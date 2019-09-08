webpackHotUpdate(9,{

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/OrderForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/OrderForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ \"../node_modules/core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"../node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['mode', 'order'],\n  data: function data() {\n    return {\n      fields: {\n        orderNumber: '',\n        orderDate: '',\n        orderPrice: '',\n        orderCity: '',\n        orderStatus: ''\n      }\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    if (this.order == undefined) return;else if (this.order !== undefined) {\n      Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object.keys(this.fields)).forEach(function (key) {\n        _this.fields[key] = _this.order[key];\n      });\n    }\n  },\n  methods: {\n    orderMethod: function orderMethod() {\n      this.mode === 'create' ? this.createOrder() : this.editOrder();\n    },\n    createOrder: function createOrder() {\n      console.log('OrderForm: Request passing to Vuex', this.fields);\n      this.$store.dispatch('createOrder', Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.fields, {\n        managerID: 'a',\n        fullName: 'Jurijs Kolesnikovs'\n      }));\n    },\n    editOrder: function editOrder() {\n      var payload = {};\n      var id = '123';\n      /* Mongoose id, temp solution, need to rebuild backend */\n\n      console.log('Editing order...', Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.fields));\n      this.$store.dispatch('editOrder', id, Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, this.fields, {\n        managerID: 'a',\n        fullName: 'Jurijs Kolesnikovs'\n      }));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL09yZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL09yZGVyRm9ybS52dWU/NWU2NCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtbGVmdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgPGgzPiB7eyR0KG1vZGUgPT09ICdjcmVhdGUnID8gJ2NyZWF0ZU9yZGVyJyA6ICdlZGl0T3JkZXInKX19PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICB7e29yZGVyfX1cbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cIm9yZGVyTWV0aG9kXCI+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwib3JkZXJOdW1iZXJcIj57eyAkdCgnb3JkZXIubnVtYmVyJykgfX08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIGlkPVwib3JkZXJOdW1iZXJcIiBcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICBuYW1lPVwib3JkZXJOdW1iZXJcIiBcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMub3JkZXJOdW1iZXJcIlxuICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwib3JkZXJEYXRlXCI+e3sgJHQoJ29yZGVyLmRhdGUnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgaWQ9XCJvcmRlckRhdGVcIiBcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXG4gICAgICAgICAgICBuYW1lPVwib3JkZXJEYXRlXCIgXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm9yZGVyRGF0ZVwiXG4gICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJvcmRlclByaWNlXCI+e3sgJHQoJ29yZGVyLnByaWNlJykgfX08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIGlkPVwib3JkZXJQcmljZVwiIFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIG5hbWU9XCJvcmRlclByaWNlXCIgXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm9yZGVyUHJpY2VcIlxuICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwib3JkZXJDaXR5XCI+e3sgJHQoJ29yZGVyLmNpdHknKSB9fTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgIG5hbWU9XCJvcmRlckNpdHlcIiBcbiAgICAgICAgICAgIGlkPVwib3JkZXJDaXR5XCIgXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm9yZGVyQ2l0eVwiXG4gICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgZGlzYWJsZWQgc2VsZWN0ZWQ+e3sgJHQoJ29yZGVyLmNpdHknKSB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cItCf0YHQutC+0LJcIj7Qn9GB0LrQvtCyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIj7QodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQszwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1pZj1cIm1vZGUgPT09ICdlZGl0J1wiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJvcmRlclN0YXR1c1wiPtCh0YLQsNGC0YPRgSDQt9Cw0LrQsNC30LA8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgXG4gICAgICAgICAgICBuYW1lPVwib3JkZXJTdGF0dXNcIiBcbiAgICAgICAgICAgIGlkPVwib3JkZXJTdGF0dXNcIiBcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMub3JkZXJTdGF0dXNcIlxuICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiIGRlZmF1bHQ+0J3QtSDQstGL0LTQsNC9PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPtCS0YvQtNCw0L0g0YfQsNGB0YLQuNGH0L3Qvjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj7QktGL0LTQsNC9INC/0L7Qu9C90L7RgdGC0YzRjjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7ICR0KCdzdWJtaXQnKSB9fTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydtb2RlJywgJ29yZGVyJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkczoge1xuICAgICAgICBvcmRlck51bWJlcjogJycsXG4gICAgICAgIG9yZGVyRGF0ZTogJycsXG4gICAgICAgIG9yZGVyUHJpY2U6ICcnLFxuICAgICAgICBvcmRlckNpdHk6ICcnLFxuICAgICAgICBvcmRlclN0YXR1czogJydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMub3JkZXIgPT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgICBlbHNlIGlmICh0aGlzLm9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFsuLi5PYmplY3Qua2V5cyh0aGlzLmZpZWxkcyldLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdGhpcy5maWVsZHNba2V5XSA9IHRoaXMub3JkZXJba2V5XVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcmRlck1ldGhvZCgpIHtcbiAgICAgIHRoaXMubW9kZSA9PT0gJ2NyZWF0ZScgPyB0aGlzLmNyZWF0ZU9yZGVyKCkgOiB0aGlzLmVkaXRPcmRlcigpXG4gICAgfSxcbiAgICBjcmVhdGVPcmRlcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPcmRlckZvcm06IFJlcXVlc3QgcGFzc2luZyB0byBWdWV4JywgdGhpcy5maWVsZHMpXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY3JlYXRlT3JkZXInLCB7XG4gICAgICAgIC4uLnRoaXMuZmllbGRzLFxuICAgICAgICBtYW5hZ2VySUQ6ICdhJyxcbiAgICAgICAgZnVsbE5hbWU6ICdKdXJpanMgS29sZXNuaWtvdnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgZWRpdE9yZGVyKCkge1xuICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgbGV0IGlkID0gJzEyMycgLyogTW9uZ29vc2UgaWQsIHRlbXAgc29sdXRpb24sIG5lZWQgdG8gcmVidWlsZCBiYWNrZW5kICovXG4gICAgICBjb25zb2xlLmxvZygnRWRpdGluZyBvcmRlci4uLicsIHsgLi4udGhpcy5maWVsZHMgfSlcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdlZGl0T3JkZXInLCBcbiAgICAgIGlkLFxuICAgICAge1xuICAgICAgICAuLi50aGlzLmZpZWxkcyxcbiAgICAgICAgbWFuYWdlcklEOiAnYScsXG4gICAgICAgIGZ1bGxOYW1lOiAnSnVyaWpzIEtvbGVzbmlrb3ZzJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBTEE7QUFPQTtBQXpCQTtBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/OrderForm.vue?vue&type=script&lang=js&\n");

/***/ })

})