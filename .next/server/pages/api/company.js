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
exports.id = "pages/api/company";
exports.ids = ["pages/api/company"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQyxNQUFNLEdBQUVELHdEQUFaOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0UsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXByb2plY3QvLi9saWIvcHJpc21hLmpzP2M1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hPSBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/company/index.js":
/*!************************************!*\
  !*** ./pages/api/company/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\nconst newCompany = null;\n\nasync function handle(req) {\n  const {\n    companyName\n  } = req.body;\n  newCompany = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.companies.create({\n    data: {\n      name: companyName\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newCompany);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29tcGFueS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsTUFBTUMsVUFBVSxHQUFDLElBQWpCOztBQUNDLGVBQWVDLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFpQkQsR0FBRyxDQUFDRSxJQUEzQjtBQUNGSixFQUFBQSxVQUFVLEdBQUcsTUFBTUQsaUVBQUEsQ0FBd0I7QUFDdkNRLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVMO0FBREY7QUFEaUMsR0FBeEIsQ0FBbkI7QUFNQzs7QUFDRCxpRUFBZUgsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215cHJvamVjdC8uL3BhZ2VzL2FwaS9jb21wYW55L2luZGV4LmpzP2EyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcbmNvbnN0IG5ld0NvbXBhbnk9bnVsbFxuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEpIHtcbiAgY29uc3QgeyBjb21wYW55TmFtZX0gPSByZXEuYm9keTtcbm5ld0NvbXBhbnkgPSBhd2FpdCBwcmlzbWEuY29tcGFuaWVzLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZTogY29tcGFueU5hbWUgXG4gICAgfSxcbiAgfSlcbiBcbn1cbmV4cG9ydCBkZWZhdWx0IG5ld0NvbXBhbnkiXSwibmFtZXMiOlsicHJpc21hIiwibmV3Q29tcGFueSIsImhhbmRsZSIsInJlcSIsImNvbXBhbnlOYW1lIiwiYm9keSIsImNvbXBhbmllcyIsImNyZWF0ZSIsImRhdGEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/company/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/company/index.js"));
module.exports = __webpack_exports__;

})();