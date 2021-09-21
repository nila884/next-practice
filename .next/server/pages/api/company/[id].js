"use strict";
(() => {
var exports = {};
exports.id = 892;
exports.ids = [892];
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

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2019);

async function handle(req, res) {
  switch (req.method) {
    case "GET":
      await getCompany(req, res);
      break;

    case "DELETE":
      await deleteCompany(req, res);
      break;
  } //     const user =  prisma.companies.findUnique({
  //         where: {
  //           id: req.query.id
  //         },
  //       })
  //       console.log(user)
  //   // console.log(result)
  //   res.json(user);

}

const getCompany = async (req, res) => {
  const {
    pid
  } = req.query;
  const company = user = _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .default.companies.findUnique */ .Z.companies.findUnique({
    where: {
      id: req.query.id
    }
  });
  res.status(200).json(company);
};

const deleteCompany = async (req, res) => {
  const {
    pid
  } = req.query;
  console.log("deleted");
  res.status(200).json({});
}; // This function gets called at build time


async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('/api/company');
  const posts = await res.json(); // Get the paths we want to pre-render based on posts

  const paths = posts.map(post => ({
    params: {
      id: post.id
    }
  }));
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2026));
module.exports = __webpack_exports__;

})();