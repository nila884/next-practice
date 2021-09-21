"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
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

/***/ 4241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2773);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2019);



/* JWT secret key */

const KEY = "niyeraniyeraniyera";
async function handle(req, res) {
  // const auth= async (req, res) => {
  // return new Promise(resolve => {
  const {
    method
  } = req;

  try {
    switch (method) {
      case 'POST':
        /* Get Post Data */
        const {
          email,
          password
        } = req.body;
        /* Any how email or password is blank */

        if (!email || !password) {
          return res.status(400).json({
            status: 'error',
            error: 'Request missing username or password'
          });
        }
        /* Check user email in database */


        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .default.user.findUnique */ .Z.user.findUnique({
          where: {
            email: email
          }
        }); // const user = USERS.find(user => {
        //   return user.email === email;
        // });

        /* Check if exists */

        if (!user) {
          /* Send error with message */
          res.status(400).json({
            status: 'error',
            error: 'User Not Found'
          });
        }
        /* Variables checking */


        if (user) {
          const userId = user.id,
                userEmail = user.email,
                userCompanyId = user.companyId,
                userPassword = user.password,
                userCreated = user.createdAt;
          const company = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .default.companies.findUnique */ .Z.companies.findUnique({
            where: {
              id: userCompanyId
            }
          }).then(company => {
            bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, userPassword).then(isMatch => {
              /* User matched */
              if (isMatch) {
                /* Create JWT Payload */
                const payload = {
                  id: userId,
                  email: userEmail,
                  userCompanyId: userCompanyId,
                  companyName: company.name,
                  createdAt: userCreated
                };
                console.log(payload);
                /* Sign token */

                jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, KEY, {
                  expiresIn: 3600 // 1 h in seconds

                }, (err, token) => {
                  /* Send succes with token */
                  res.status(200).json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
              } else {
                /* Send error with message */
                res.status(400).json({
                  status: 'error',
                  error: 'Password incorrect'
                });
              }
            });
          });
          /* Check and compare password */
        }

        break;

      case 'PUT':
        break;

      case 'PATCH':
        break;

      default:
        break;
    }
  } catch (error) {
    throw error;
  } //   return resolve();
  // });

}
;

/***/ }),

/***/ 2773:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4241));
module.exports = __webpack_exports__;

})();