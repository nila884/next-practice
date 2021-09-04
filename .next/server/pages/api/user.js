"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQyxNQUFNLEdBQUVELHdEQUFaOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0UsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXByb2plY3QvLi9saWIvcHJpc21hLmpzP2M1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hPSBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function handle(req, res) {\n  const {\n    userName,\n    email,\n    password\n  } = req.body;\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.create({\n    data: {\n      name: userName,\n      email: email,\n      password: password\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRWUsZUFBZUMsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdDLFFBQU07QUFBRUMsSUFBQUEsUUFBRjtBQUFXQyxJQUFBQSxLQUFYO0FBQWlCQyxJQUFBQTtBQUFqQixNQUE4QkosR0FBRyxDQUFDSyxJQUF4QztBQUdBLFFBQU1DLE1BQU0sR0FBRyxNQUFNUiw0REFBQSxDQUFtQjtBQUN0Q1csSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRVIsUUFERjtBQUVKQyxNQUFBQSxLQUFLLEVBQUVBLEtBRkg7QUFHSkMsTUFBQUEsUUFBUSxFQUFDQTtBQUhMO0FBRGdDLEdBQW5CLENBQXJCO0FBT0FILEVBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTTCxNQUFUO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXByb2plY3QvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcz9hMzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgdXNlck5hbWUsZW1haWwscGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZTogdXNlck5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwYXNzd29yZDpwYXNzd29yZFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInVzZXJOYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXN1bHQiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/user/index.js"));
module.exports = __webpack_exports__;

})();