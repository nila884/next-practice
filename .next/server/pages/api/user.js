"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 2019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.js
// lib/prisma.ts

let prisma = client_namespaceObject.PrismaClient;

if (true) {
  prisma = new client_namespaceObject.PrismaClient();
} else {}

/* harmony default export */ const lib_prisma = (prisma);

/***/ }),

/***/ 9487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2019);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2773);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);


async function handle(req, res) {
  const {
    userName,
    email,
    password,
    companyName
  } = req.body;

  if (!userName || !email || !password) {
    return res.status(422).json({
      error: "please fill in all fields"
    });
  }

  const newCompany = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .default.companies.create */ .Z.companies.create({
    data: {
      name: companyName
    }
  });
  const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 12); // console.log(prisma)

  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .default.user.create */ .Z.user.create({
    data: {
      name: userName,
      email: email,
      password: hashedPassword,
      companyId: newCompany.id
    }
  }); // console.log(result)

  res.json(result);
}

/***/ }),

/***/ 2773:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9487));
module.exports = __webpack_exports__;

})();