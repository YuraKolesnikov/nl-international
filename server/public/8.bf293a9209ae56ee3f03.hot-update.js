webpackHotUpdate(8,{

/***/ "./src/services/UserService.js":
/*!*************************************!*\
  !*** ./src/services/UserService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios */ \"./src/services/axios.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  showManagers: function () {\n    var _showManagers = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return Object(_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().get('/admin/showAllManagers');\n\n            case 3:\n              response = _context.sent;\n              console.log(response);\n              return _context.abrupt(\"return\", response.data);\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    function showManagers() {\n      return _showManagers.apply(this, arguments);\n    }\n\n    return showManagers;\n  }(),\n  logIn: function () {\n    var _logIn = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(_ref) {\n      var managerID, password, response;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              managerID = _ref.managerID, password = _ref.password;\n              _context2.prev = 1;\n              _context2.next = 4;\n              return Object(_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().post('/users/login', {\n                managerID: managerID,\n                password: password\n              });\n\n            case 4:\n              response = _context2.sent;\n              console.log(reponse);\n              return _context2.abrupt(\"return\", response);\n\n            case 9:\n              _context2.prev = 9;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.error(_context2.t0);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 9]]);\n    }));\n\n    function logIn(_x) {\n      return _logIn.apply(this, arguments);\n    }\n\n    return logIn;\n  }(),\n  register: function () {\n    var _register = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(payload) {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              console.log('[AXIOS MESSAGE]: registering', Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, payload));\n              /* try {\n                const response = await AXIOS().post('/users/register', payload)\n                console.log(response)\n                return response\n              } catch (error) {\n                console.error(error)\n              } */\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function register(_x2) {\n      return _register.apply(this, arguments);\n    }\n\n    return register;\n  }(),\n  logout: function () {\n    var _logout = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4() {\n      var response;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return Object(_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().get('/users/logout');\n\n            case 3:\n              response = _context4.sent;\n              console.log(response);\n              return _context4.abrupt(\"return\", response);\n\n            case 8:\n              _context4.prev = 8;\n              _context4.t0 = _context4[\"catch\"](0);\n              console.error(_context4.t0);\n\n            case 11:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 8]]);\n    }));\n\n    function logout() {\n      return _logout.apply(this, arguments);\n    }\n\n    return logout;\n  }()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UuanM/MzVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVhJT1MgZnJvbSAnLi9heGlvcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBzaG93TWFuYWdlcnMoKSB7XG4gICAgdHJ5IHsgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFYSU9TKCkuZ2V0KCcvYWRtaW4vc2hvd0FsbE1hbmFnZXJzJylcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUuZXJyb3IoZXJyb3IpIH1cbiAgfSxcblxuICBhc3luYyBsb2dJbih7IG1hbmFnZXJJRCwgcGFzc3dvcmQgfSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFYSU9TKCkucG9zdCgnL3VzZXJzL2xvZ2luJywgeyBtYW5hZ2VySUQsIHBhc3N3b3JkIH0pXG4gICAgICBjb25zb2xlLmxvZyhyZXBvbnNlKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHJlZ2lzdGVyKHBheWxvYWQpIHtcbiAgICBjb25zb2xlLmxvZygnW0FYSU9TIE1FU1NBR0VdOiByZWdpc3RlcmluZycsIHsgLi4ucGF5bG9hZCB9KVxuICAgIC8qIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFYSU9TKCkucG9zdCgnL3VzZXJzL3JlZ2lzdGVyJywgcGF5bG9hZClcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfSAqL1xuICB9LFxuXG4gIGFzeW5jIGxvZ291dCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBWElPUygpLmdldCgnL3VzZXJzL2xvZ291dCcpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbiAgfSxcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVVBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBVkE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQVlBO0FBQ0E7QUFiQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW9CQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUNBOzs7Ozs7OztBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBK0JBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaUNBO0FBQ0E7QUFsQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/UserService.js\n");

/***/ })

})