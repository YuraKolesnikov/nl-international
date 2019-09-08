webpackHotUpdate("app",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "../node_modules/core-js/library/fn/array/from.js":
false,

/***/ "../node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "../node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "../node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "../node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "../node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "../node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./src/store/modules/orders/ordersModule.js":
/*!**************************************************!*\
  !*** ./src/store/modules/orders/ordersModule.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _services_OrderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/OrderService */ \"./src/services/OrderService.js\");\n\n\n\nvar state = {\n  orders: [],\n  currentOrder: {}\n};\nvar mutations = {};\nvar getters = {};\nvar actions = {\n  createOrder: function () {\n    var _createOrder = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(ctx, payload) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _services_OrderService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addOrder(payload);\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function createOrder(_x, _x2) {\n      return _createOrder.apply(this, arguments);\n    }\n\n    return createOrder;\n  }(),\n  editOrder: function () {\n    var _editOrder = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(ctx, id, payload) {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              return _context2.abrupt(\"return\", console.log([payload]));\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function editOrder(_x3, _x4, _x5) {\n      return _editOrder.apply(this, arguments);\n    }\n\n    return editOrder;\n  }(),\n\n  /* await OrderService.editOrder(id, payload), */\n  deleteOrder: function () {\n    var _deleteOrder = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(ctx, _ref) {\n      var orderNumber, managerID;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              orderNumber = _ref.orderNumber, managerID = _ref.managerID;\n              _context3.next = 3;\n              return _services_OrderService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteOrder({\n                orderNumber: orderNumber,\n                managerID: managerID\n              });\n\n            case 3:\n              return _context3.abrupt(\"return\", _context3.sent);\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function deleteOrder(_x6, _x7) {\n      return _deleteOrder.apply(this, arguments);\n    }\n\n    return deleteOrder;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  mutations: mutations,\n  getters: getters,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9vcmRlcnMvb3JkZXJzTW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL21vZHVsZXMvb3JkZXJzL29yZGVyc01vZHVsZS5qcz8zOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlclNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9PcmRlclNlcnZpY2UnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBvcmRlcnM6IFtdLFxuICBjdXJyZW50T3JkZXI6IHt9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHt9XG5cbmNvbnN0IGdldHRlcnMgPSB7fVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICBjcmVhdGVPcmRlcjogYXN5bmMgKGN0eCwgcGF5bG9hZCkgPT4gXG4gICAgYXdhaXQgT3JkZXJTZXJ2aWNlLmFkZE9yZGVyKHBheWxvYWQpLFxuICBlZGl0T3JkZXI6IGFzeW5jIChjdHgsIGlkLCBwYXlsb2FkKSA9PiBjb25zb2xlLmxvZyhbcGF5bG9hZF0pLFxuICAgIC8qIGF3YWl0IE9yZGVyU2VydmljZS5lZGl0T3JkZXIoaWQsIHBheWxvYWQpLCAqL1xuICBkZWxldGVPcmRlcjogYXN5bmMgKGN0eCwgeyBvcmRlck51bWJlciwgbWFuYWdlcklEIH0pID0+IFxuICAgIGF3YWl0IE9yZGVyU2VydmljZS5kZWxldGVPcmRlcih7IG9yZGVyTnVtYmVyLCBtYW5hZ2VySUQgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgbXV0YXRpb25zLFxuICBnZXR0ZXJzLFxuICBhY3Rpb25zXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/modules/orders/ordersModule.js\n");

/***/ })

})