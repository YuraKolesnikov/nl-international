webpackHotUpdate(3,{

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/Table.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/Table.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"../node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_tableFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tableFields */ \"./src/utils/tableFields.js\");\n/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/OrderService */ \"./src/services/OrderService.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['mode', 'tableData'],\n  computed: {\n    tableHeaders: function tableHeaders() {\n      return _utils_tableFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headers[this.$props.mode];\n    },\n    tableKeys: function tableKeys() {\n      return _utils_tableFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"].keys[this.$props.mode];\n    }\n  },\n  methods: {\n    redirectToEditItem: function redirectToEditItem(item) {\n      if (this.mode == 'orders') {\n        return this.$router.push({\n          path: \"/orders/edit/\".concat(item.orderNumber)\n        });\n      }\n\n      this.$router.push({\n        path: \"/users/edit/\".concat(item.managerID)\n      });\n      /* TODO: Get orderNumber and dispatch an action */\n    },\n    deleteItem: function deleteItem(item) {\n      if (this.mode == 'orders') {\n        this.$store.dispatch('deleteOrder', {});\n        return console.log('Deleting order...', item);\n      }\n\n      console.log('Deleting user...', item);\n      /* TODO: Get orderNumber and dispatch an action */\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVGFibGUudnVlPzBjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC0xMCBvZmZzZXQtbWQtMVwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIiB2LWlmPVwidGFibGVEYXRhLmxlbmd0aCA+IDBcIj5cbiAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0XCI+XG4gICAgICAgIDx0ciBjbGFzcz1cInRleHQtbGVmdFwiPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIHYtZm9yPVwiKGhlYWRlciwgaW5kZXgpIGluIHRhYmxlSGVhZGVyc1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAge3sgJHQoYCR7aGVhZGVyfWApIH19XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFibGVEYXRhXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIj48Yj57e2luZGV4ICsgMX19PC9iPjwvdGQ+XG4gICAgICAgICAgPHRkIHYtZm9yPVwiKGZpZWxkLCBpbmRleCkgaW4gdGFibGVLZXlzXCIgOmtleT1cImluZGV4XCI+e3tpdGVtW2ZpZWxkXX19PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBtci0xXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwicmVkaXJlY3RUb0VkaXRJdGVtKGl0ZW0pXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBtbC0xXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlSXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8cCB2LWVsc2U+Tm8gb3JkZXJzIGFkZGVkPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHRhYmxlRmllbGRzIGZyb20gJ0AvdXRpbHMvdGFibGVGaWVsZHMnXG5pbXBvcnQgT3JkZXJTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvT3JkZXJTZXJ2aWNlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydtb2RlJywgJ3RhYmxlRGF0YSddLFxuICBjb21wdXRlZDoge1xuICAgIHRhYmxlSGVhZGVycygpIHtcbiAgICAgIHJldHVybiB0YWJsZUZpZWxkcy5oZWFkZXJzW3RoaXMuJHByb3BzLm1vZGVdXG4gICAgfSxcbiAgICB0YWJsZUtleXMoKSB7XG4gICAgICByZXR1cm4gdGFibGVGaWVsZHMua2V5c1t0aGlzLiRwcm9wcy5tb2RlXVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlZGlyZWN0VG9FZGl0SXRlbShpdGVtKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdvcmRlcnMnKSB7XG4gICAgICAgIHJldHVybiAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgL29yZGVycy9lZGl0LyR7aXRlbS5vcmRlck51bWJlcn1gIH0pXG4gICAgICB9XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IGAvdXNlcnMvZWRpdC8ke2l0ZW0ubWFuYWdlcklEfWAgfSlcbiAgICAgIC8qIFRPRE86IEdldCBvcmRlck51bWJlciBhbmQgZGlzcGF0Y2ggYW4gYWN0aW9uICovXG4gICAgfSxcbiAgICBkZWxldGVJdGVtKGl0ZW0pIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ29yZGVycycpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2RlbGV0ZU9yZGVyJywge1xuICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ0RlbGV0aW5nIG9yZGVyLi4uJywgaXRlbSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdEZWxldGluZyB1c2VyLi4uJywgaXRlbSlcbiAgICAgIC8qIFRPRE86IEdldCBvcmRlck51bWJlciBhbmQgZGlzcGF0Y2ggYW4gYWN0aW9uICovXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxudGgsIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWpCQTtBQVZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/Table.vue?vue&type=script&lang=js&\n");

/***/ })

})