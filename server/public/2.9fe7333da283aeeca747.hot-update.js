webpackHotUpdate(2,{

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/AuthForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./src/components/AuthForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"../node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/UserService */ \"./src/services/UserService.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      token: '',\n      response: {},\n      dataForAlert: [],\n      formData: {\n        logIn: {\n          formFields: [{\n            type: 'password',\n            id: 'password'\n          }]\n        },\n        register: {\n          formFields: [{\n            type: \"text\",\n            id: \"fullName\",\n            placeholder: \"George Clooney\"\n          }, {\n            type: \"password\",\n            id: \"password\"\n          }, {\n            type: \"password\",\n            id: \"password2\"\n          }]\n        }\n      },\n      vModelFields: {\n        managerID: '',\n        fullName: '',\n        mail: '',\n        password: '',\n        password2: ''\n      }\n    };\n  },\n  methods: {\n    setMode: function setMode(newMode) {\n      this.$store.commit('setMode', newMode);\n    },\n    fireAuthRoutine: function fireAuthRoutine() {\n      return this.mode === 'logIn' ? this.logIn() : this.register();\n    },\n    logIn: function () {\n      var _logIn = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var payload, response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                payload = {\n                  managerID: this.vModelFields.managerID,\n                  password: this.vModelFields.password\n                };\n                _context.prev = 1;\n                _context.next = 4;\n                return _services_UserService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logIn(payload);\n\n              case 4:\n                response = _context.sent;\n                this.$store.commit('logIn');\n                this.$store.commit('setUser', response.data.user);\n                this.$router.push({\n                  path: '/my-orders'\n                });\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](1);\n                console.log(_context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[1, 10]]);\n      }));\n\n      function logIn() {\n        return _logIn.apply(this, arguments);\n      }\n\n      return logIn;\n    }(),\n    register: function () {\n      var _register = Object(_Users_yura_dev_nl_international_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var newError, payload;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (this.vModelFields.password != this.vModelFields.password2) {\n                  newError = {\n                    type: 'danger',\n                    message: 'Passwords don\\'t match!'\n                  };\n                }\n\n                payload = {\n                  managerID: this.vModelFields.managerID,\n                  fullName: this.vModelFields.fullName,\n                  password: this.vModelFields.password\n                };\n                _context2.next = 4;\n                return _services_UserService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(payload);\n\n              case 4:\n                this.response = _context2.sent;\n\n                if (!(this.response.status === 400)) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\");\n\n              case 7:\n                this.$router.push({\n                  path: '/my-orders'\n                });\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function register() {\n        return _register.apply(this, arguments);\n      }\n\n      return register;\n    }()\n  },\n  computed: {\n    mode: function mode() {\n      return this.$store.getters.getMode;\n    },\n    isLoggedIn: function isLoggedIn() {\n      return this.$store.getters.isLoggedIn;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0F1dGhGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQXV0aEZvcm0udnVlPzQ5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tY3VzdG9tXCIgXG4gICAgICAgICAgOmNsYXNzPVwieydhY3RpdmUnOiBtb2RlID09PSAnbG9nSW4nfVwiIFxuICAgICAgICAgIEBjbGljaz1cInNldE1vZGUoJ2xvZ0luJylcIj57eyAkdCgnbG9nSW4nKX19PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWN1c3RvbVwiIFxuICAgICAgICAgIDpjbGFzcz1cInsnYWN0aXZlJzogbW9kZSA9PT0gJ3JlZ2lzdGVyJ31cIiBcbiAgICAgICAgICBAY2xpY2s9XCJzZXRNb2RlKCdyZWdpc3RlcicpXCI+e3sgJHQoJ3JlZ2lzdGVyJykgfX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgzPnt7ICR0KG1vZGUpIH19PC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJmaXJlQXV0aFJvdXRpbmVcIj5cbiAgICAgICAgPCEtLSBPdXQgb2YgdGhlIGxvb3AgLS0+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWFuYWdlcklEXCI+SUQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJtYW5hZ2VySURcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm1hbmFnZXJJRFwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzNzEtMTIzNDU2NzhcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInZNb2RlbEZpZWxkcy5tYW5hZ2VySURcIlxuICAgICAgICAgID5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPGZpZWxkc2V0XG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICB2LWZvcj1cImZpZWxkIGluIG1vZGUgPT09ICdyZWdpc3RlcicgPyBmb3JtRGF0YS5yZWdpc3Rlci5mb3JtRmllbGRzIDogZm9ybURhdGEubG9nSW4uZm9ybUZpZWxkc1wiXG4gICAgICAgICAgOmtleT1cImZpZWxkLmlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaWRcIj57eyAkdChmaWVsZC5pZCkgfX08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIDp0eXBlPVwiZmllbGQudHlwZVwiXG4gICAgICAgICAgICA6bmFtZT1cImZpZWxkLmlkXCJcbiAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImZpZWxkLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2TW9kZWxGaWVsZHNbZmllbGQuaWRdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtbXV0ZWQgZm9ybS10ZXh0XCJcbiAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5pZCA9PT0gJ3Bhc3N3b3JkJyAmJiBtb2RlID09ICdyZWdpc3RlcidcIlxuICAgICAgICAgID57eyAkdCgncGFzc3dvcmRJbmZvJykgfX08L3NtYWxsPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7ICR0KCdzdWJtaXQnKSB9fTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvVXNlclNlcnZpY2UnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuOiAnJyxcbiAgICAgIHJlc3BvbnNlOiB7fSxcbiAgICAgIGRhdGFGb3JBbGVydDogW10sXG4gICAgICBmb3JtRGF0YToge1xuICAgICAgICBsb2dJbjoge1xuICAgICAgICAgIGZvcm1GaWVsZHM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogJ3Bhc3N3b3JkJywgaWQ6ICdwYXNzd29yZCcgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgICBmb3JtRmllbGRzOiBbXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJmdWxsTmFtZVwiLCBwbGFjZWhvbGRlcjogXCJHZW9yZ2UgQ2xvb25leVwiIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFwicGFzc3dvcmRcIiwgaWQ6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBcInBhc3N3b3JkXCIsIGlkOiBcInBhc3N3b3JkMlwiIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2TW9kZWxGaWVsZHM6IHtcbiAgICAgICAgbWFuYWdlcklEOiAnJyxcbiAgICAgICAgZnVsbE5hbWU6ICcnLFxuICAgICAgICBtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZDI6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRNb2RlKG5ld01vZGUpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0TW9kZScsIG5ld01vZGUpXG4gICAgfSxcblxuICAgIGZpcmVBdXRoUm91dGluZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdsb2dJbicgPyB0aGlzLmxvZ0luKCkgOiB0aGlzLnJlZ2lzdGVyKClcbiAgICB9LFxuXG4gICAgYXN5bmMgbG9nSW4oKSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtYW5hZ2VySUQ6IHRoaXMudk1vZGVsRmllbGRzLm1hbmFnZXJJRCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMudk1vZGVsRmllbGRzLnBhc3N3b3JkXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVXNlclNlcnZpY2UubG9nSW4ocGF5bG9hZClcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdsb2dJbicpXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VXNlcicsIHJlc3BvbnNlLmRhdGEudXNlcilcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAnL215LW9yZGVycycgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyByZWdpc3RlcigpIHtcbiAgICAgIGlmICh0aGlzLnZNb2RlbEZpZWxkcy5wYXNzd29yZCAhPSB0aGlzLnZNb2RlbEZpZWxkcy5wYXNzd29yZDIpIHtcbiAgICAgICAgY29uc3QgbmV3RXJyb3IgPSB7XG4gICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoISdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtYW5hZ2VySUQ6IHRoaXMudk1vZGVsRmllbGRzLm1hbmFnZXJJRCxcbiAgICAgICAgZnVsbE5hbWU6IHRoaXMudk1vZGVsRmllbGRzLmZ1bGxOYW1lLFxuICAgICAgICBwYXNzd29yZDogdGhpcy52TW9kZWxGaWVsZHMucGFzc3dvcmRcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNwb25zZSA9IGF3YWl0IFVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHBheWxvYWQpXG4gICAgICBpZiAodGhpcy5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogJy9teS1vcmRlcnMnIH0pXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgbW9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldE1vZGVcbiAgICB9LFxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0xvZ2dlZEluXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYnRuLWN1c3RvbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZGEzZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgJjpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgfVxuXG4gICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjJmZjtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFOQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBbEJBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBbkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF5QkE7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFqQ0E7QUFBQTtBQUNBO0FBREE7QUF1Q0E7QUFDQTtBQXhDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBMkNBO0FBQUE7QUFBQTtBQUNBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBN0VBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./src/components/AuthForm.vue?vue&type=script&lang=js&\n");

/***/ })

})