webpackHotUpdate(3,{

/***/ "./src/services/UserService.js":
/*!*************************************!*\
  !*** ./src/services/UserService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axios */ \"./src/services/axios.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  showManagers: function () {\n    var _showManagers = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return Object(_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().get('/admin/showAllManagers');\n\n            case 3:\n              response = _context.sent;\n              console.log(response);\n              return _context.abrupt(\"return\", response);\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    function showManagers() {\n      return _showManagers.apply(this, arguments);\n    }\n\n    return showManagers;\n  }(),\n  logIn: function () {\n    var _logIn = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(_ref) {\n      var managerID, password;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              managerID = _ref.managerID, password = _ref.password;\n              console.log('[AXIOS MESSAGE]: logging in', {\n                managerID: managerID,\n                password: password\n              });\n              /* try {\n                const response = await AXIOS().post('/users/login', payload)\n                console.log(reponse)\n                return response\n              } catch (error) {\n                console.error(error)\n              } */\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    function logIn(_x) {\n      return _logIn.apply(this, arguments);\n    }\n\n    return logIn;\n  }(),\n  register: function () {\n    var _register = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(payload) {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              console.log('[AXIOS MESSAGE]: registering', payload);\n              /* try {\n                const response = await AXIOS().post('/users/register', payload)\n                console.log(response)\n                return response\n              } catch (error) {\n                console.error(error)\n              } */\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    function register(_x2) {\n      return _register.apply(this, arguments);\n    }\n\n    return register;\n  }(),\n  logout: function () {\n    var _logout = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4() {\n      var response;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return Object(_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().get('/users/logout');\n\n            case 3:\n              response = _context4.sent;\n              console.log(response);\n              return _context4.abrupt(\"return\", response);\n\n            case 8:\n              _context4.prev = 8;\n              _context4.t0 = _context4[\"catch\"](0);\n              console.error(_context4.t0);\n\n            case 11:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 8]]);\n    }));\n\n    function logout() {\n      return _logout.apply(this, arguments);\n    }\n\n    return logout;\n  }()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvVXNlclNlcnZpY2UuanM/MzVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVhJT1MgZnJvbSAnLi9heGlvcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBzaG93TWFuYWdlcnMoKSB7XG4gICAgdHJ5IHsgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFYSU9TKCkuZ2V0KCcvYWRtaW4vc2hvd0FsbE1hbmFnZXJzJylcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKSB9XG4gIH0sXG5cbiAgYXN5bmMgbG9nSW4oeyBtYW5hZ2VySUQsIHBhc3N3b3JkIH0pIHtcbiAgICBjb25zb2xlLmxvZygnW0FYSU9TIE1FU1NBR0VdOiBsb2dnaW5nIGluJywgeyBtYW5hZ2VySUQsIHBhc3N3b3JkIH0pXG4gICAgLyogdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVhJT1MoKS5wb3N0KCcvdXNlcnMvbG9naW4nLCBwYXlsb2FkKVxuICAgICAgY29uc29sZS5sb2cocmVwb25zZSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH0gKi9cbiAgfSxcblxuICBhc3luYyByZWdpc3RlcihwYXlsb2FkKSB7XG4gICAgY29uc29sZS5sb2coJ1tBWElPUyBNRVNTQUdFXTogcmVnaXN0ZXJpbmcnLCBwYXlsb2FkKVxuICAgIC8qIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFYSU9TKCkucG9zdCgnL3VzZXJzL3JlZ2lzdGVyJywgcGF5bG9hZClcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfSAqL1xuICB9LFxuXG4gIGFzeW5jIGxvZ291dCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBWElPUygpLmdldCgnL3VzZXJzL2xvZ291dCcpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbiAgfSxcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFVQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXFCQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUNBOzs7Ozs7OztBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZ0NBO0FBaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0NBO0FBQ0E7QUFuQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/UserService.js\n");

/***/ })

})