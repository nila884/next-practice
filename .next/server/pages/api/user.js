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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handle(req, res) {\n  const {\n    userName,\n    email,\n    password,\n    companyName\n  } = req.body;\n\n  if (!userName || !email || !password) {\n    return res.status(422).json({\n      error: \"please fill in all fields\"\n    });\n  }\n\n  const newCompany = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.companies.create({\n    data: {\n      name: companyName\n    }\n  });\n  const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 12); // console.log(prisma)\n\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.create({\n    data: {\n      name: userName,\n      email: email,\n      password: hashedPassword,\n      companyId: newCompany.id\n    }\n  }); // console.log(result)\n\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUNlLGVBQWVFLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QyxRQUFNO0FBQUVDLElBQUFBLFFBQUY7QUFBV0MsSUFBQUEsS0FBWDtBQUFpQkMsSUFBQUEsUUFBakI7QUFBMEJDLElBQUFBO0FBQTFCLE1BQXlDTCxHQUFHLENBQUNNLElBQW5EOztBQUNBLE1BQUcsQ0FBQ0osUUFBRCxJQUFhLENBQUNDLEtBQWQsSUFBdUIsQ0FBQ0MsUUFBM0IsRUFBb0M7QUFDbEMsV0FBT0gsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBQUEsS0FBSyxFQUFDO0FBQVAsS0FBckIsQ0FBUDtBQUNEOztBQUdBLFFBQU1DLFVBQVUsR0FBRSxNQUFNYixpRUFBQSxDQUF3QjtBQUM3Q2dCLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVUO0FBREY7QUFEdUMsR0FBeEIsQ0FBeEI7QUFNRCxRQUFNVSxjQUFjLEdBQUcsTUFBTWpCLG9EQUFBLENBQVlNLFFBQVosRUFBcUIsRUFBckIsQ0FBN0IsQ0FiNkMsQ0FlN0M7O0FBR0EsUUFBTWEsTUFBTSxHQUFHLE1BQU1wQiw0REFBQSxDQUFtQjtBQUN0Q2dCLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVaLFFBREY7QUFFSkMsTUFBQUEsS0FBSyxFQUFFQSxLQUZIO0FBR0pDLE1BQUFBLFFBQVEsRUFBRVcsY0FITjtBQUlKSSxNQUFBQSxTQUFTLEVBQUVULFVBQVUsQ0FBQ1U7QUFKbEI7QUFEZ0MsR0FBbkIsQ0FBckIsQ0FsQjZDLENBMkI3Qzs7QUFDQW5CLEVBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTUyxNQUFUO0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXByb2plY3QvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcz9hMzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyB1c2VyTmFtZSxlbWFpbCxwYXNzd29yZCxjb21wYW55TmFtZX0gPSByZXEuYm9keTtcbiAgaWYoIXVzZXJOYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpe1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7ZXJyb3I6XCJwbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzXCJ9KVxuICB9XG5cbiAgIFxuICAgY29uc3QgbmV3Q29tcGFueT0gYXdhaXQgcHJpc21hLmNvbXBhbmllcy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBjb21wYW55TmFtZSBcbiAgICAgIH0sXG4gICAgfSlcbiAgXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsMTIpXG5cbiAgLy8gY29uc29sZS5sb2cocHJpc21hKVxuXG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lOiB1c2VyTmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgIGNvbXBhbnlJZDogbmV3Q29tcGFueS5pZFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgcmVzLmpzb24ocmVzdWx0KTtcblxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImJjcnlwdCIsImhhbmRsZSIsInJlcSIsInJlcyIsInVzZXJOYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbXBhbnlOYW1lIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5ld0NvbXBhbnkiLCJjb21wYW5pZXMiLCJjcmVhdGUiLCJkYXRhIiwibmFtZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInJlc3VsdCIsInVzZXIiLCJjb21wYW55SWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

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