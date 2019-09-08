webpackHotUpdate("app",{

/***/ "./src/store/modules/orders/ordersModule.js":
/*!**************************************************!*\
  !*** ./src/store/modules/orders/ordersModule.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/OrderService */ \"./src/services/OrderService.js\");\n\n\n\nvar state = {\n  orders: [],\n  currentOrder: {}\n};\nvar mutations = {};\nvar getters = {};\nvar actions = {\n  createOrder: function () {\n    var _createOrder = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(payload) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('VUEX: Passing request to OrderService');\n              _context.next = 3;\n              return _services_OrderService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addOrder(payload);\n\n            case 3:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function createOrder(_x) {\n      return _createOrder.apply(this, arguments);\n    }\n\n    return createOrder;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  mutations: mutations,\n  getters: getters,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9vcmRlcnMvb3JkZXJzTW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL21vZHVsZXMvb3JkZXJzL29yZGVyc01vZHVsZS5qcz8zOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlclNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9PcmRlclNlcnZpY2UnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBvcmRlcnM6IFtdLFxuICBjdXJyZW50T3JkZXI6IHt9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHt9XG5cbmNvbnN0IGdldHRlcnMgPSB7fVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICBjcmVhdGVPcmRlcjogYXN5bmMgcGF5bG9hZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ1ZVRVg6IFBhc3NpbmcgcmVxdWVzdCB0byBPcmRlclNlcnZpY2UnKVxuICAgIHJldHVybiBhd2FpdCBPcmRlclNlcnZpY2UuYWRkT3JkZXIocGF5bG9hZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBtdXRhdGlvbnMsXG4gIGdldHRlcnMsXG4gIGFjdGlvbnNcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/modules/orders/ordersModule.js\n");

/***/ })

})