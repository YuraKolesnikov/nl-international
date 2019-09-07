webpackHotUpdate("app",{

/***/ "./src/store/modules/users/usersModule.js":
/*!************************************************!*\
  !*** ./src/store/modules/users/usersModule.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/UserService */ \"./src/services/UserService.js\");\n\n\n\nvar state = {\n  isLoggedIn: false,\n  isAdmin: false,\n  token: ''\n};\nvar mutations = {\n  /* newState = Boolean */\n  setLoginState: function setLoginState(state, newState) {\n    return state.isLoggedIn = newState;\n  },\n  setToken: function setToken(state, token) {\n    return state.token = token;\n  }\n};\nvar getters = {};\nvar actions = {\n  logIn: function () {\n    var _logIn = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(_ref, payload) {\n      var commit, response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              commit = _ref.commit;\n              console.log('[VUEX MESSAGE]: ', payload);\n              _context.next = 4;\n              return _services_UserService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logIn(payload);\n\n            case 4:\n              response = _context.sent;\n              console.log('[VUEX MESSAGE]: ');\n\n              if (response.status == 200) {\n                commit('setToken', response.data.token);\n              }\n\n              return _context.abrupt(\"return\", response);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function logIn(_x, _x2) {\n      return _logIn.apply(this, arguments);\n    }\n\n    return logIn;\n  }()\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  mutations: mutations,\n  getters: getters,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy91c2Vycy91c2Vyc01vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdG9yZS9tb2R1bGVzL3VzZXJzL3VzZXJzTW9kdWxlLmpzPzM1ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvVXNlclNlcnZpY2UnXG5cbmNvbnN0IHN0YXRlID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNBZG1pbjogZmFsc2UsXG4gIHRva2VuOiAnJ1xufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gIC8qIG5ld1N0YXRlID0gQm9vbGVhbiAqL1xuICBzZXRMb2dpblN0YXRlOiAoc3RhdGUsIG5ld1N0YXRlKSA9PiBzdGF0ZS5pc0xvZ2dlZEluID0gbmV3U3RhdGUsXG4gIHNldFRva2VuOiAoc3RhdGUsIHRva2VuKSA9PiBzdGF0ZS50b2tlbiA9IHRva2VuXG59XG5cbmNvbnN0IGdldHRlcnMgPSB7fVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICBsb2dJbjogYXN5bmMgKHsgY29tbWl0IH0sIHBheWxvYWQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW1ZVRVggTUVTU0FHRV06ICcsIHBheWxvYWQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBVc2VyU2VydmljZS5sb2dJbihwYXlsb2FkKVxuICAgIGNvbnNvbGUubG9nKCdbVlVFWCBNRVNTQUdFXTogJywgKVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb21taXQoJ3NldFRva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbilcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgbXV0YXRpb25zLFxuICBnZXR0ZXJzLFxuICBhY3Rpb25zXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/modules/users/usersModule.js\n");

/***/ })

})