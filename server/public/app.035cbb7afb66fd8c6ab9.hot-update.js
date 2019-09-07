webpackHotUpdate("app",{

/***/ "./src/store/modules/users/usersModule.js":
/*!************************************************!*\
  !*** ./src/store/modules/users/usersModule.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/UserService */ \"./src/services/UserService.js\");\n\n\n\nvar state = {\n  isLoggedIn: false,\n  isAdmin: false\n};\nvar mutations = {\n  /* newState = Boolean */\n  setLoginState: function setLoginState(state, newState) {\n    return state.isLoggedIn = newState;\n  }\n};\nvar getters = {};\nvar actions = {\n  logIn: function () {\n    var _logIn = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(_ref, payload) {\n      var ctx, response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              ctx = _ref.ctx;\n              console.log(payload);\n              _context.next = 4;\n              return _services_UserService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logIn(payload);\n\n            case 4:\n              response = _context.sent;\n              console.log('[VUEX MESSAGE]: ', response);\n              return _context.abrupt(\"return\", response);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function logIn(_x, _x2) {\n      return _logIn.apply(this, arguments);\n    }\n\n    return logIn;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  mutations: mutations,\n  getters: getters,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy91c2Vycy91c2Vyc01vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdG9yZS9tb2R1bGVzL3VzZXJzL3VzZXJzTW9kdWxlLmpzPzM1ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvVXNlclNlcnZpY2UnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNBZG1pbjogZmFsc2Vcbn1cblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAvKiBuZXdTdGF0ZSA9IEJvb2xlYW4gKi9cbiAgc2V0TG9naW5TdGF0ZTogKHN0YXRlLCBuZXdTdGF0ZSkgPT4gc3RhdGUuaXNMb2dnZWRJbiA9IG5ld1N0YXRlXG59XG5cbmNvbnN0IGdldHRlcnMgPSB7fVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICBsb2dJbjogYXN5bmMgKHsgY3R4IH0sIHBheWxvYWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVXNlclNlcnZpY2UubG9nSW4ocGF5bG9hZClcbiAgICBjb25zb2xlLmxvZygnW1ZVRVggTUVTU0FHRV06ICcsIHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIG11dGF0aW9ucyxcbiAgZ2V0dGVycyxcbiAgYWN0aW9uc1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/modules/users/usersModule.js\n");

/***/ })

})